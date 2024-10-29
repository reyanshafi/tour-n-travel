"use client";

import React, { useState, useEffect } from 'react';
import AdminLayout from '../../components/AdminLayout';
import Modals from '../../components/Modals';
import { supabase } from '../../utlis/supabaseClient';

const Packages = () => {
  const [packages, setPackages] = useState([]);
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [isModalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    fetchPackages();
  }, []);

  const fetchPackages = async () => {
    try {
      const { data, error } = await supabase.from('packages').select('*');
      if (error) {
        console.error('Error fetching packages:', error);
        return;
      }
      setPackages(data);
    } catch (error) {
      console.error('Error fetching packages:', error);
    }
  };

  const handleSave = async (newPackage, imageFile) => {
    let imageUrl = newPackage.image;

    try {
      if (imageFile) {
        const fileName = `${Date.now()}_${imageFile.name}`;
        const { data: imageData, error: uploadError } = await supabase.storage
          .from('package-images')
          .upload(fileName, imageFile);

        if (uploadError) {
          throw new Error('Image upload failed');
        }

        imageUrl = supabase.storage.from('package-images').getPublicUrl(fileName).publicUrl;
      }

      const { error } = newPackage.id
        ? await supabase
            .from('packages')
            .update({
              name: newPackage.name,
              price: newPackage.price,
              days: newPackage.days,
              image: imageUrl,
            })
            .eq('id', newPackage.id)
        : await supabase.from('packages').insert({
            name: newPackage.name,
            price: newPackage.price,
            days: newPackage.days,
            image: imageUrl,
          });

      if (error) {
        throw new Error('Error saving package');
      }

      fetchPackages(); // Refresh packages in the admin panel after save
      alert('Package saved successfully');
      setModalOpen(false);
    } catch (error) {
      console.error('Error:', error);
      alert(`An error occurred: ${error.message}`);
    }
  };

  const handleDelete = async (id) => {
    const confirmDelete = confirm('Are you sure you want to delete this package?');
    if (!confirmDelete) return;

    try {
      const { error } = await supabase.from('packages').delete().eq('id', id);
      if (error) {
        throw new Error('Error deleting package');
      }

      fetchPackages();
      alert('Package deleted successfully');
    } catch (error) {
      console.error('Error:', error);
      alert(`An error occurred: ${error.message}`);
    }
  };

  const handleAdd = () => {
    setSelectedPackage(null); // Clear the form for adding a new package
    setModalOpen(true);
  };

  const handleEdit = (pkg) => {
    setSelectedPackage(pkg); // Load the selected package data into the modal
    setModalOpen(true);
  };

  return (
    <AdminLayout>
      <h2 className="text-2xl font-bold mb-6">Manage Packages</h2>
      <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={handleAdd}>
        Add Package
      </button>
      <div className="overflow-x-auto mt-4">
        <table className="min-w-full bg-white rounded-lg shadow-lg">
          <thead>
            <tr>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Photo</th>
              <th className="px-4 py-2">Price</th>
              <th className="px-4 py-2">Days</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {packages.map((pkg) => (
              <tr key={pkg.id} className="border-b">
                <td className="px-4 py-2">{pkg.name}</td>
                <td className="px-4 py-2">
                  {pkg.image ? (
                    <img src={pkg.image} alt={pkg.name} className="w-20 h-20 object-cover rounded" />
                  ) : (
                    'No Image'
                  )}
                </td>
                <td className="px-4 py-2">{pkg.price}</td>
                <td className="px-4 py-2">{pkg.days}</td>
                <td className="px-4 py-2">
                  <button className="text-blue-500 mr-2" onClick={() => handleEdit(pkg)}>
                    Edit
                  </button>
                  <button className="text-red-500" onClick={() => handleDelete(pkg.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {isModalOpen && (
        <Modals
          selectedItem={selectedPackage}
          type="packages"
          onClose={() => setModalOpen(false)}
          onSave={handleSave}
        />
      )}
    </AdminLayout>
  );
};

export default Packages;
