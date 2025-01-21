"use client";

import { useParams } from "next/navigation";
import React, { useState } from "react";
import {
  MapPin,
  Star,
  Award,
  CheckCircle,
  Phone,
  Calendar,
  ArrowRight,
  Info,
} from "lucide-react";

function PropertyPage() {
  const { slug } = useParams();
//   const [selectedImage, setSelectedImage] = useState(0);
//   const [showInquiryForm, setShowInquiryForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const property = {
    name: "Luxury Oceanfront Villa",
    completeAddress: "123 Coastal Drive, Malibu, CA 90265",
    startingPrice: 2500000,
    description:
      "Perched on the pristine coastline, this stunning oceanfront villa offers breathtaking views and luxurious living spaces. Features include a private beach access, infinity pool, and state-of-the-art smart home technology. This exclusive property combines modern luxury with natural beauty, creating an unparalleled living experience.",
    image: {
      url: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=1600&h=900",
    },
    status: "For Sale",
    isFeatured: true,
    rating: 4.8,
    propertyType: { name: "Luxury Villa" },
    MetaTitle: "Luxury Oceanfront Villa | Premium Real Estate",
    features: [
      "6 Bedrooms",
      "8 Bathrooms",
      "10,000 sq ft",
      "3 Car Garage",
      "Private Pool",
      "Ocean View",
    ],
  };

  const images = [
    property.image.url,
    "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&q=80&w=1600&h=900",
    "https://images.unsplash.com/photo-1613977257592-4871e5fcd7c4?auto=format&fit=crop&q=80&w=1600&h=900",
  ];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Here you would make the API call to submit the inquiry
    console.log("Form submitted:", { ...formData, property: slug });
  };

  return (
    <div className="min-h-screen bg-gray-50/50">
      {/* Navigation Bar */}
      {/* <div className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
                    <h1 className="text-xl font-semibold text-gray-900 truncate max-w-md">
                        {property.name}
                    </h1>
                    <div className="flex items-center gap-4">
                        <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
                            <Share2 className="w-4 h-4" />
                            <span>Share</span>
                        </button>
                        <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
                            <Heart className="w-4 h-4" />
                            <span>Save</span>
                        </button>
                    </div>
                </div>
            </div> */}

      {/* Hero Gallery */}
      <div className=" w-full h-auto max-h-[70vh] overflow-hidden">
        <div className=" inset-0">
          <img
            src={images[0]}
            alt={property.name}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Header */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                  {property.status}
                </span>
                {property.isFeatured && (
                  <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium flex items-center gap-1">
                    <Award className="w-4 h-4" />
                    Featured
                  </span>
                )}
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-4xl font-bold text-gray-900">
                    {property.name}
                  </h1>
                  <div className="flex items-center gap-2 mt-2 text-gray-600">
                    <MapPin className="w-5 h-5" />
                    {property.completeAddress}
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold text-gray-900">
                    ${property.startingPrice.toLocaleString()}
                  </div>
                  <div className="flex items-center gap-1 text-amber-500 justify-end mt-1">
                    <Star className="w-5 h-5 fill-current" />
                    <span className="font-medium">{property.rating}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 p-6 bg-white rounded-2xl shadow-sm">
              {property.features.map((feature, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 p-3 rounded-xl bg-gray-50"
                >
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{feature}</span>
                </div>
              ))}
            </div>

            {/* Description */}
            <div className="bg-white rounded-2xl shadow-sm p-6">
              <h2 className="text-2xl font-semibold mb-4">
                About this property
              </h2>
              <p className="text-gray-600 leading-relaxed">
                {property.description}
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              {/* Contact Form */}
              <div className="bg-white rounded-2xl shadow-sm p-6 mb-6">
                <h3 className="text-xl font-semibold mb-6">
                  Interested in this property?
                </h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      required
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-colors flex items-center justify-center gap-2"
                  >
                    Send Inquiry
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              </div>

              {/* Quick Actions */}
              <div className="bg-gray-50 rounded-2xl p-6">
                <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  <button className="w-full flex items-center justify-between px-4 py-3 bg-white rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="flex items-center gap-3">
                      <Calendar className="w-5 h-5 text-blue-600" />
                      <span className="font-medium">Schedule a Tour</span>
                    </div>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <button className="w-full flex items-center justify-between px-4 py-3 bg-white rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-blue-600" />
                      <span className="font-medium">Call Agent</span>
                    </div>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <button className="w-full flex items-center justify-between px-4 py-3 bg-white rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="flex items-center gap-3">
                      <Info className="w-5 h-5 text-blue-600" />
                      <span className="font-medium">Request Info</span>
                    </div>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PropertyPage;
