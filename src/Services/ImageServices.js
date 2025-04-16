import Cloudinary from "../Config/Cloundinary_config.js"

class ImageServices{
    CreateCloudinaryUpload = (buffer,productId) => {
        return new Promise((resolve, reject) => {
          cloudinary.config({
            cloud_name: "drkjgtjx7",
            api_key: "155458673135492",
            api_secret: "YOSQ7rHZlKmNZCjU9tlaQwW5014",
          });
    
          const uploadStream = cloudinary.v2.uploader.upload_stream(
            {
              resource_type: 'image',
              folder: "jobee",
              public_id: productId, // Tên hình theo mã Id product
            },
            (error, result) => {
              if (error) {
                reject(`Không thể tải hình lên được: ${error.message}`);
              } else {
                // Sau khi upload xong, tạo URL từ public_id
                const imageUrl = cloudinary.url(result.public_id, {
                  crop: "fill",
                  format: "png",
                });
                resolve({ result, imageUrl }); // Trả về kết quả upload và URL
              }
            }
          );
      
          // Tạo stream từ buffer và pipe vào uploadStream của Cloudinary
          streamifier.createReadStream(buffer).pipe(uploadStream);
        });
    };

    createCloundaryUploadJob=async(buffer,jobID)=>{
        const uploadStream = Cloudinary.v2.uploader.upload_stream(
            {
              resource_type: 'image',
              folder: "jobee",
              public_id: jobID, // Tên hình theo mã Id 
            },
            (error, result) => {
              if (error) {
                reject(`Không thể tải hình lên được: ${error.message}`);
              } else {
                // Sau khi upload xong, tạo URL từ public_id
                const imageUrl = cloudinary.url(result.public_id, {
                  crop: "fill",
                  format: "png",
                });
                resolve({ result, imageUrl }); // Trả về kết quả upload và URL
              }
            }
          );  

    }

    createCloundaryUploadEmployer=async(buffer,userId)=>{

    }

}
export default new ImageServices