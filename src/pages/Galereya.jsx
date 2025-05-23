import React, { useState, useEffect } from 'react';
// import Gallery from 'react-photo-gallery';
import { Skeleton, Card, Typography, Image } from 'antd'; // Typography for text styling
import { photos, videos } from '../fakeDatas/galereya';
import { useTranslation } from 'react-i18next';

const { Title, Paragraph } = Typography;

const Galereya = () => {
  const [loading, setLoading] = useState(true);
  const { t, i18n } = useTranslation(); // useTranslation hook'ini chaqiramiz

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  if (loading) {
    return (
      <div className="text-center w-[95%] mx-auto">
        <h1 className="text-3xl font-bold my-6 text-[#32CD32]">{t("gallery")}</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
          {[...Array(5)].map((_, index) => (
            <Skeleton.Image key={index} active paragraph={{ rows: 3 }} style={{ width: '300px', height: '200px' }} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className='font-afacad'>
      {/* Photos Section */}
      <div className="text-center ">
        <h1 className="text-3xl font-bold my-6 text-[#6e54d8] uppercase">{t("gallery")}</h1>
        {/* <Gallery photos={photos} /> */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
          {photos.map((photo, index) => {
            const colors = ['red', 'blue', 'green', 'orange', 'purple'];
            const textColor = colors[index % colors.length];
            const bgColor = `rgba(${index % 8 === 0 ? "205, 10, 10, 0.2" : "0, 0, 255, 0.2"})`;
            return (
              <Card key={index} bordered={false} style={{ width: '98%' }}>
                <div className='flex flex-col items-start justify-center gap-2' style={{ width: '100%', height: '220px' }}>
                  <Image
                    src={photo.src}
                    alt={`photo-${index}`}
                    style={{
                      width: '350px',
                      height: '200px',
                      objectFit: 'cover',
                      borderRadius: '8px',
                    }}
                  />
                  <Typography.Text
                    style={{
                      marginBottom: '10px',
                      backgroundColor: bgColor,
                      color: textColor,
                      padding: '5px',
                      borderRadius: '4px',
                    }}
                    className={`bg-[${bgColor}]`}
                  >
                    {photo.description}
                  </Typography.Text>
                </div>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Videos Section */}
      <div className="text-center mt-8">
        <h1 className="text-3xl font-bold my-6 text-[#6e54d8] uppercase">{t("videos")}</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {videos.map((video, index) => (
            <Card key={index} bordered={false} style={{ width: '100%' }}>
              <div className="video-container flex flex-col items-start justify-center gap-2" style={{ overflow: 'hidden' }}>
                <video
                  controls
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    borderRadius: '8px',
                  }}
                >
                  <source src={video.src} type="video/mp4" />
                </video>
                <Typography.Text style={{
                  marginBottom: '10px',
                  backgroundColor: 'rgba(0, 0, 0, 0.5)',
                  color: 'white',
                  padding: '5px',
                  borderRadius: '4px',
                }}>{video.description}</Typography.Text>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Galereya;
