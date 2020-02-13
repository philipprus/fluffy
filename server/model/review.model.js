const mongoose = require("mongoose");


const ReviewSchema =  new mongoose.Schema({
      created: { type: Date, default: Date.now },
      content: {
            type: String,
            required: [true]
      },
      social_link: {
            type: String
      },
      fullName: {
            type: String
      },
      email: {
            type: String,
      },
      thumbnails: [{
            public_id: {
                  type: String,
            },
            secure_url: {
                  type: String,
            },
      }],
      status: {
            type: String,
            enum: ['PUBLISH', 'DRAFT'],
            default: 'DRAFT',
            uppercase: true,
          },
},{
      versionKey: false // You should be aware of the outcome after set to false
    });

const Review =  mongoose.model('Review', ReviewSchema, "reviews");

module.exports = Review;