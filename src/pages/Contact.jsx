import React, { useState } from 'react';
import { Form, Input, Button, notification } from 'antd';
import { useNavigate } from 'react-router-dom';

const Contact = () => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [phone, setPhone] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = () => {

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      notification.success({
        message: 'Malumotlar yuborildi',
        description: 'Sizning ma’lumotlaringiz muvaffaqiyatli yuborildi.',
        placement: 'topRight',
      });
      setName('');
      setSurname('');
      setPhone('');
      navigate('/');
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }, 2000);
  };

  return (
    <div className="text-center w-[90%] mx-auto">
      <h1 className="text-3xl font-bold my-6 text-[#2b82fc]">Aloqa</h1>
      <div className="max-w-[1380px] mx-auto bg-white p-8 rounded-lg shadow-lg transition-transform transform hover:scale-105">
        <Form
          onFinish={handleSubmit}
          className="flex flex-col md:flex-row items-start justify-between gap-4"
          // layout="vertical"
          style={{ width: '100%' }}
          validateTrigger={['onBlur', 'onChange']}
        >
          <Form.Item
            label={<span className="font-semibold text-lg">Ism</span>}
            name="name"
            rules={[{ required: true, message: 'Ismni kiriting!', whitespace: true },]}
          >
            <Input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Ismingizni kiriting"
              style={{
                borderRadius: '8px',
                height: '40px',
                width: '100%',
                borderColor: '#2b82fc',
              }}
            />
          </Form.Item>
          <Form.Item
            label={<span className="font-semibold text-lg">Familiya</span>}
            name="surname"
            rules={[{ required: true, message: 'Familiya kiriting!' }]}
          >
            <Input
              value={surname}
              onChange={(e) => setSurname(e.target.value)}
              placeholder="Familiyangizni kiriting"
              style={{
                borderRadius: '8px',
                height: '40px',
                width: '100%',
                borderColor: '#2b82fc',
              }}
            />
          </Form.Item>
          <Form.Item
            label={<span className="font-semibold text-lg">Telefon</span>}
            name="phone"
            rules={[{ required: true, message: 'Telefon raqamingizni kiriting!' }]}
          >
            <Input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Telefon raqamingizni kiriting"
              style={{
                borderRadius: '8px',
                height: '40px',
                width: '100%',
                borderColor: '#2b82fc',
              }}
            />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              loading={loading}
              style={{
                borderRadius: '8px',
                height: '45px',
                width: '100%',
                backgroundColor: '#2b82fc',
              }}
            >
              Yuborish
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Contact;
