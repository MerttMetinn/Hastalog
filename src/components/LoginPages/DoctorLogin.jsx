import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
 const [email, setEmail] = useState('');
 const [password, setPassword] = useState('');
 const navigate = useNavigate();


 const handleSubmit = (e) => {
    e.preventDefault();
    // Eksiksiz bilgilerin girilip girilmediğini kontrol ediyoruz
    if (email && password) {
      navigate('/anasayfa/doktor');
    } else {
      // Eksik bilgiler varsa, kullanıcıya bir uyarı mesajı gösterebilirsiniz
      alert('Lütfen e-posta ve şifrenizi giriniz.');
    }
 };

 return (
    <div className="min-h-screen bg-green-500 flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-full sm:w-96">
        <h2 className="text-2xl font-semibold mb-4">Doctor Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email</label>
            <input 
              type="email" 
              id="email" 
              className="border rounded-md px-3 py-2 w-full focus:outline-none focus:border-blue-500" 
              placeholder="Enter your email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required 
              autoComplete="off"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 font-semibold mb-2">Password</label>
            <input 
              type="password" 
              id="password" 
              className="border rounded-md px-3 py-2 w-full focus:outline-none focus:border-blue-500" 
              placeholder="Enter your password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              required 
            />
          </div>
          <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors duration-300">Login</button>
        </form>
      </div>
    </div>
 );
}

export default Login;
