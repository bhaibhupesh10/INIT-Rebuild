import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',
        firstNiche: '',
        secondNiche: '',
        thirdNiche: '',
        password: '',
        confirmPassword: '',
        resume: null,
    });

    const [errors, setErrors] = useState({});

    const validate = () => {
        let tempErrors = {};
        if (!formData.name.trim()) tempErrors.name = "Name is required";
        if (!formData.email.trim()) tempErrors.email = "Email is required";
        else if (!/\S+@\S+\.\S+/.test(formData.email)) tempErrors.email = "Email is invalid";
        if (!formData.phone.trim()) tempErrors.phone = "Phone number is required";
        else if (!/^\d{10}$/.test(formData.phone)) tempErrors.phone = "Phone number must be 10 digits";
        if (!formData.address.trim()) tempErrors.address = "Address is required";
        if (!formData.firstNiche.trim()) tempErrors.firstNiche = "First niche is required";
        if (!formData.secondNiche.trim()) tempErrors.secondNiche = "Second niche is required";
        if (!formData.thirdNiche.trim()) tempErrors.thirdNiche = "Third niche is required";
        if (!formData.password) tempErrors.password = "Password is required";
        else if (formData.password.length < 6) tempErrors.password = "Password must be at least 6 characters";
        if (!formData.confirmPassword) tempErrors.confirmPassword = "Confirm password is required";
        else if (formData.password !== formData.confirmPassword) tempErrors.confirmPassword = "Passwords do not match";
        if (!formData.resume) tempErrors.resume = "Resume is required";

        setErrors(tempErrors);
        return Object.keys(tempErrors).length === 0;
    };

    const handleChange = (e) => {
        if (e.target.name === 'resume') {
            setFormData({
                ...formData,
                resume: e.target.files[0],
            });
        } else {
            setFormData({
                ...formData,
                [e.target.name]: e.target.value,
            });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validate()) return;

        try {
            const formDataToSend = new FormData();
            formDataToSend.append('name', formData.name);
            formDataToSend.append('email', formData.email);
            formDataToSend.append('phone', formData.phone);
            formDataToSend.append('address', formData.address);
            formDataToSend.append('firstNiche', formData.firstNiche);
            formDataToSend.append('secondNiche', formData.secondNiche);
            formDataToSend.append('thirdNiche', formData.thirdNiche);
            formDataToSend.append('password', formData.password);
            formDataToSend.append('resume', formData.resume);

            const response = await axios.post(`http://localhost:4000/auth/student/register`, formDataToSend, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
                withCredentials: true,
            });

            if (response.data.success) {
                alert('Registration successful!');
                navigate('/login'); // Redirect to login page
            }
        } catch (error) {
            alert(error.response?.data?.message || 'Registration failed');
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="w-full max-w-lg bg-white p-8 shadow-lg rounded-lg">
                <h2 className="text-2xl font-semibold text-center mb-6">Register</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium">Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className={`w-full p-2 border rounded-md ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
                        />
                        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className={`w-full p-2 border rounded-md ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                        />
                        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium">Phone</label>
                        <input
                            type="text"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className={`w-full p-2 border rounded-md ${errors.phone ? 'border-red-500' : 'border-gray-300'}`}
                        />
                        {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium">Address</label>
                        <input
                            type="text"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            className={`w-full p-2 border rounded-md ${errors.address ? 'border-red-500' : 'border-gray-300'}`}
                        />
                        {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address}</p>}
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium">First Niche</label>
                        <input
                            type="text"
                            name="firstNiche"
                            value={formData.firstNiche}
                            onChange={handleChange}
                            className={`w-full p-2 border rounded-md ${errors.firstNiche ? 'border-red-500' : 'border-gray-300'}`}
                        />
                        {errors.firstNiche && <p className="text-red-500 text-sm mt-1">{errors.firstNiche}</p>}
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium">Second Niche</label>
                        <input
                            type="text"
                            name="secondNiche"
                            value={formData.secondNiche}
                            onChange={handleChange}
                            className={`w-full p-2 border rounded-md ${errors.secondNiche ? 'border-red-500' : 'border-gray-300'}`}
                        />
                        {errors.secondNiche && <p className="text-red-500 text-sm mt-1">{errors.secondNiche}</p>}
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium">Third Niche</label>
                        <input
                            type="text"
                            name="thirdNiche"
                            value={formData.thirdNiche}
                            onChange={handleChange}
                            className={`w-full p-2 border rounded-md ${errors.thirdNiche ? 'border-red-500' : 'border-gray-300'}`}
                        />
                        {errors.thirdNiche && <p className="text-red-500 text-sm mt-1">{errors.thirdNiche}</p>}
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium">Password</label>
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            className={`w-full p-2 border rounded-md ${errors.password ? 'border-red-500' : 'border-gray-300'}`}
                        />
                        {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium">Confirm Password</label>
                        <input
                            type="password"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            className={`w-full p-2 border rounded-md ${errors.confirmPassword ? 'border-red-500' : 'border-gray-300'}`}
                        />
                        {errors.confirmPassword && <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>}
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium">Resume (PDF, DOCX only)</label>
                        <input
                            type="file"
                            name="resume"
                            onChange={handleChange}
                            className={`w-full p-2 border rounded-md ${errors.resume ? 'border-red-500' : 'border-gray-300'}`}
                        />
                        {errors.resume && <p className="text-red-500 text-sm mt-1">{errors.resume}</p>}
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white font-medium p-2 rounded-md hover:bg-blue-600 transition duration-200"
                    >
                        Register
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Register;
