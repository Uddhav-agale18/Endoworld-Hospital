const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const path = require('path');
const logoRoutes = require('./routes/logoRoutes');
const sliderRoutes = require('./routes/sliderRoutes');
const aboutRoutes = require('./routes/aboutRoutes');
const aboutImageRoutes=require('./routes/aboutImageRoutes');
const logoNameRoutes =require('./routes/logoNameRoutes');
const galleryRoutes =require('./routes/galleryRoutes');
const contactRoutes =require('./routes/contactsRoutes');
const testimonialRoutes=require('./routes/testimonialRoutes');
const socialMediaRoutes=require('./routes/socialMediaRoutes');
const doctorStaffRoutes=require('./routes/doctorStaffRoutes');
const blogRoutes =require('./routes/blogRoutes');
const mapRoutes =require('./routes/mapRoutes');
const appointmentRoutes=require('./routes/appointmentRoutes');
const maleFertilityRoutes=require('./routes/faq/maleInfertilityRoutes');
const femaleFertilityRoutes=require('./routes/faq/femalInfertilityRoutes');
const InfertilityRoutes =require('./routes/faq/InfertilityRoutes');
const hysteroscopyRoutes=require('./routes/faq/hysteroscopyRoutes');
const serviceRoutes=require('./routes/service/serviceRoutes');
const itemRoutes=require('./routes/service/serviceItemRoutes');
const homeServiceRoutes=require('./routes/HomeServiceRoutes/serviceRoutes')
const homeItemRoutes=require('./routes/HomeServiceRoutes/serviceItemRoutes')
const adminRoutes =require('./routes/adminRoutes');
const bodyParser = require('body-parser');

dotenv.config();

// Initialize express app
const app = express();

// Middleware
app.use(express.json()); 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({ origin: "http://localhost:3000", methods: ["GET", "POST", "PUT", "DELETE"], credentials: true }));

app.use('/uploads', express.static(path.join(__dirname, 'uploads'))); 

// Routes
app.use('/api/logo', logoRoutes);
app.use('/api/slider', sliderRoutes);
app.use('/api/about', aboutRoutes);
app.use('/api/aboutImage', aboutImageRoutes);
app.use('/api/logoName', logoNameRoutes);
app.use('/api/gallery', galleryRoutes);
app.use('/api/contact', contactRoutes);
app.use("/api/testimonials", testimonialRoutes);
app.use('/api/social-media', socialMediaRoutes);
app.use('/api/doctor-staff', doctorStaffRoutes);
app.use('/api/blogs', blogRoutes);
app.use('/api/maps', mapRoutes);
app.use('/api/appointment', appointmentRoutes);
app.use('/api/male-fertility', maleFertilityRoutes);
app.use('/api/female-fertility', femaleFertilityRoutes);
app.use('/api/fertility', InfertilityRoutes);
app.use('/api/hysteroscopy', hysteroscopyRoutes);
app.use('/api/services', serviceRoutes);
app.use('/api/serviceItems', itemRoutes);
app.use('/api/home-services', homeServiceRoutes);
app.use('/api/home-serviceItems', homeItemRoutes);
app.use('/api/admin', adminRoutes);



// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log('Error connecting to MongoDB:', err));

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
