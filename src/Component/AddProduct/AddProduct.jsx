import React, { useState, useEffect } from 'react';
import Button from '../Navbar/Btn';
import { useNavigate } from 'react-router';
import mainEndPoint from '../Api/User/mainEndPoint';

const AddProduct = () => {

    const userData = JSON.parse(localStorage.getItem("userDetail"));
  if(!userData || userData.role !=="admin"){
    console.log("i am admin");
    window.location.href = "/"
  }

 
  
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [notification, setNotification] = useState({ show: false, message: '', type: '' });
  const [editingProduct, setEditingProduct] = useState(null);
  
  // Form state
  const [formData, setFormData] = useState({
    pName: '',
    price: '',
    rating: '',
    description: '',
    popularity: '',
    image: '',
    features: [],
    category: ''
  });
  const [featureInput, setFeatureInput] = useState('');

  // Fetch products from API
  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await fetch(mainEndPoint+ 'product');
      const data = await response.json();
      console.log('Fetch response:', { status: response.status, data });
      
      if (response.status === 200 && data.data) {
        setProducts(data.data);
      } else {
        showNotification('Error fetching products: Invalid response', 'error');
      }
    } catch (error) {
      console.error('Fetch error:', error);
      showNotification(`Error fetching products: ${error.message}`, 'error');
    } finally {
      setLoading(false);
    }
  };

  // Add product to database
  const addProduct = async () => {
    if (!formData.pName.trim()) {
      showNotification('Product name is required!', 'error');
      return;
    }

    try {
      const submitData = {
        ...formData,
        price: parseFloat(formData.price) || 0,
        rating: parseFloat(formData.rating) || 0,
        popularity: parseInt(formData.popularity) || 0
      };

      const response = await fetch(mainEndPoint+ 'product', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submitData),
      });
      
      if (response.status === 200) {
        showNotification('Product added successfully!', 'success');
        resetForm();
        fetchProducts();
      }
    } catch (error) {
      showNotification('Error adding product', 'error');
    }
  };

  // Update product in database
  const updateProduct = async () => {
    if (!formData.pName.trim()) {
      showNotification('Product name is required!', 'error');
      return;
    }

    try {
      const submitData = {
        id: editingProduct._id,
        pName: formData.pName,
        price: parseFloat(formData.price) || 0,
        rating: parseFloat(formData.rating) || 0,
        popularity: parseInt(formData.popularity) || 0,
        description: formData.description,
        image: formData.image,
        category: formData.category,
        features: formData.features
      };

      console.log('Updating product with data:', submitData);

      const response = await fetch(mainEndPoint+ 'product', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submitData),
      });
      
      const responseData = await response.json();
      console.log('Update response status:', response.status);
      console.log('Update response data:', responseData);
      
      if (response.ok || response.status === 200) {
        showNotification('Product updated successfully!', 'success');
        
        // Update the product in local state immediately
        setProducts(prevProducts => 
          prevProducts.map(product => 
            product._id === editingProduct._id 
              ? { ...product, ...submitData }
              : product
          )
        );
        
        setEditingProduct(null);
        resetForm();
        fetchProducts();
      } else {
        const errorMessage = responseData.message || 'Unknown error';
        showNotification(`Error updating product: ${errorMessage}`, 'error');
        console.error('Update failed:', responseData);
      }
    } catch (error) {
      console.error('Update error:', error);
      showNotification(`Network error updating product: ${error.message}`, 'error');
    }
  };

  // Delete product
  const deleteProduct = async (productId, productName) => {
    if (window.confirm(`Are you sure you want to delete "${productName}"?`)) {
      try {
        const response = await fetch(mainEndPoint+ 'product', {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ id: productId }),
        });
        
        if (response.status === 200) {
          showNotification('Product deleted successfully!', 'success');
          fetchProducts();
        }
      } catch (error) {
        showNotification('Error deleting product', 'error');
      }
    }
  };

  // Start editing a product
  const startEdit = (product) => {
    setEditingProduct(product);
    setFormData({
      pName: product.pName || '',
      price: product.price ? product.price.toString() : '',
      rating: product.rating ? product.rating.toString() : '',
      description: product.description || '',
      popularity: product.popularity ? product.popularity.toString() : '',
      image: product.image || '',
      features: product.features ? [...product.features] : [],
      category: product.category || ''
    });
    setFeatureInput('');
  };

  // Cancel editing
  const cancelEdit = () => {
    setEditingProduct(null);
    resetForm();
  };

  // Reset form
  const resetForm = () => {
    setFormData({
      pName: '',
      price: '',
      rating: '',
      description: '',
      popularity: '',
      image: '',
      features: [],
      category: ''
    });
    setFeatureInput('');
  };

  // Show notification
  const showNotification = (message, type) => {
    setNotification({ show: true, message, type });
    setTimeout(() => {
      setNotification({ show: false, message: '', type: '' });
    }, 3000);
  };

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Add feature to list
  const addFeature = () => {
    if (featureInput.trim() && !formData.features.includes(featureInput.trim())) {
      setFormData(prev => ({
        ...prev,
        features: [...prev.features, featureInput.trim()]
      }));
      setFeatureInput('');
    }
  };

  // Remove feature from list
  const removeFeature = (featureToRemove) => {
    setFormData(prev => ({
      ...prev,
      features: prev.features.filter(feature => feature !== featureToRemove)
    }));
  };

  useEffect(() => {
    fetchProducts();
  }, []);


  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gray-50">

    
      {/* Notification */}
      {notification.show && (
        <div className={`fixed top-4 right-4 p-4 rounded-lg text-white z-50 ${
          notification.type === 'success' ? 'bg-green-500' : 'bg-red-500'
        }`}>
          {notification.message}
        </div>
      )}

      {/* Main Container */}
      <div className="flex h-screen">
        
        {/* Left Side - Product Cards */}
        <div className="w-1/2 p-6 bg-white border-r border-gray-200 overflow-y-auto">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 sticky top-0 bg-white pb-4">All Products</h2>
          
          {loading ? (
            <div className="flex justify-center items-center h-64">
              <div className="text-xl text-gray-600">Loading products...</div>
            </div>
          ) : products.length === 0 ? (
            <div className="text-center py-16">
              <div className="text-gray-500 text-xl mb-2">No products found</div>
              <div className="text-gray-400">Add your first product using the form!</div>
            </div>
          ) : (
            <div className="space-y-4">
              {products.map((product) => (
                <div key={product._id} className={`rounded-lg p-4 border transition ${
                  editingProduct && editingProduct._id === product._id
                    ? 'bg-blue-50 border-blue-300 shadow-md'
                    : 'bg-gray-50 border-gray-200 hover:shadow-md'
                }`}>
                  <div className="flex gap-4">
                    {/* Product Image */}
                    <div className="flex-shrink-0">
                      <img
                        src={product.image || 'https://via.placeholder.com/120x120?text=No+Image'}
                        alt={product.pName}
                        className="w-24 h-24 object-cover rounded-lg"
                        onError={(e) => {
                          e.target.src = 'https://via.placeholder.com/120x120?text=No+Image';
                        }}
                      />
                    </div>
                    
                    {/* Product Info */}
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-lg font-bold text-gray-800 truncate">{product.pName}</h3>
                        <div className="flex gap-2 flex-shrink-0 ml-2">
                          <button
                            onClick={() => startEdit(product)}
                            className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 text-sm"
                          >
                            Update
                          </button>
                          <button
                            onClick={() => deleteProduct(product._id, product.pName)}
                            className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 text-sm"
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                      
                      <p className="text-gray-600 text-sm mb-2 line-clamp-2">{product.description}</p>
                      
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-xl font-bold text-green-600">${product.price}</span>
                        {/* <div className="flex items-center gap-4 text-sm text-gray-500">
                          {product.rating && <span>⭐ {product.rating}</span>}
                          {product.popularity && <span>👥 {product.popularity}</span>}
                        </div> */}
                      </div>
                      
                      {product.category && (
                        <div className="mb-2">
                          <span className="px-2 py-1 bg-purple-100 text-purple-700 rounded text-xs">
                            {product.category}
                          </span>
                        </div>
                      )}
                      
                      {/* Features */}
                      {product.features && product.features.length > 0 && (
                        <div className="flex flex-wrap gap-1">
                          {product.features.slice(0, 2).map((feature, index) => (
                            <span
                              key={index}
                              className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs"
                            >
                              {feature}
                            </span>
                          ))}
                          {product.features.length > 2 && (
                            <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">
                              +{product.features.length - 2}
                            </span>
                          )}
                        </div>
                      )}
                    </div>
                    
                  </div>
                </div>
              ))}
            </div>
          )}
         <div className='flex mt-10 justify-center mr-23'>
              <Button title={"Dashboard"} onClick= {() => navigate("/dashboard")} />
                   <Button title={"Home"} onClick= {() => navigate("/")} />
         </div>
        </div>
        

        {/* Right Side - Add/Edit Product Form */}
        <div className="w-1/2 p-6 bg-gray-50 overflow-y-auto">
          <div className="bg-white rounded-lg shadow-sm p-6">
            {/* <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                {editingProduct ? `Update: ${editingProduct.pName}` : 'Add New Product'}
              </h2>
              {editingProduct && (
                <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
                  <p className="text-sm text-blue-700">
                    <strong>Currently editing:</strong> {editingProduct.pName}
                  </p>
                  <button
                    onClick={cancelEdit}
                    className="mt-2 text-xs text-blue-600 hover:text-blue-800 underline"
                  >
                    Cancel editing and add new product instead
                  </button>
                </div>
              )}
            </div> */}
            
            <div className="space-y-4">
              
              {/* Product Name */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">Product Name *</label>
                <input
                  type="text"
                  name="pName"
                  value={formData.pName}
                  onChange={handleInputChange}
                  placeholder="Enter product name"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                />
              </div>

              {/* Price and Rating */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Price ($)</label>
                  <input
                    type="number"
                    name="price"
                    value={formData.price}
                    onChange={handleInputChange}
                    placeholder="0.00"
                    step="0.01"
                    min="0"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Rating (0-5)</label>
                  <input
                    type="number"
                    name="rating"
                    value={formData.rating}
                    onChange={handleInputChange}
                    placeholder="0.0"
                    step="0.1"
                    min="0"
                    max="5"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                  />
                </div>
              </div>

              {/* Category and Popularity */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Category</label>
                  <input
                    type="text"
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                    placeholder="Product category"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Popularity</label>
                  <input
                    type="number"
                    name="popularity"
                    value={formData.popularity}
                    onChange={handleInputChange}
                    placeholder="0"
                    min="0"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                  />
                </div>
              </div>

              {/* Image URL */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">Image URL</label>
                <input
                  type="url"
                  name="image"
                  value={formData.image}
                  onChange={handleInputChange}
                  placeholder="https://example.com/image.jpg"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                />
              </div>

              {/* Description */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">Description</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  placeholder="Product description"
                  rows="3"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                />
              </div>

              {/* Features */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">Features</label>
                <div className="flex gap-2 mb-3">
                  <input
                    type="text"
                    value={featureInput}
                    onChange={(e) => setFeatureInput(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && addFeature()}
                    placeholder="Add a feature"
                    className="flex-1 p-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                  />
                  <button
                    onClick={addFeature}
                    className="px-4 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                  >
                    Add
                  </button>
                </div>
                
                {/* Features List */}
                <div className="flex flex-wrap gap-2">
                  {formData.features.map((feature, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 text-blue-800 rounded-full"
                    >
                      {feature}
                      <button
                        onClick={() => removeFeature(feature)}
                        className="text-red-500 hover:text-red-700 font-bold"
                      >
                        ×
                      </button>
                    </span>
                  ))}
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                {editingProduct ? (
                  <div className="flex gap-3">
                    <button
                      onClick={updateProduct}
                      className="flex-1 bg-blue-500 text-white py-3 px-6 rounded-lg text-lg font-semibold hover:bg-blue-600 transition"
                    >
                      Save Changes
                    </button>
                    <button
                      onClick={cancelEdit}
                      className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition"
                    >
                      Cancel
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={addProduct}
                    className="w-full bg-green-500 text-white py-3 px-6 rounded-lg text-lg font-semibold hover:bg-green-600 transition"
                  >
                    Add Product
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;