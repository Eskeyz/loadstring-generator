import { ClipboardList } from 'lucide-react';
import React, { useState } from 'react'

const Content = () => {
  const [inputUrl, setInputUrl] = useState('');
  const [loadstring,setLoadstring] = useState('Output will be here.');
  const [isCopied, setIsCopied] = useState(false);

  const handleInputChange = (e) => {
    const newInputUrl = e.target.value;
    setInputUrl(newInputUrl);
    setIsCopied(false);
    const newLoadstring = newInputUrl ? `loadstring(game:HttpGet("${newInputUrl}"))()` : 'Output will be here.';
    setLoadstring(newLoadstring);
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(loadstring)
      .then(() => {
        setIsCopied(true);
        setTimeout(() => {
          setIsCopied(false);
        }, 2000);
      })
      .catch((error) => {
        console.error('Gagal menyalin teks ke clipboard:', error);
      });
  };
  return (
    <div className='text-center mt-[66px] px-10'>
      <h1 className='text-2xl lg:text-4xl font-bold'>Loadstring Generator</h1>
      <p className='text-lg mt-2'>Generate loadstrings for your Roblox game.</p>
      <div className='mt-10 lg:px-[300px]'>
        <input type="url" placeholder="Paste your RAW Link" className="input input-bordered w-full" value={inputUrl} onChange={handleInputChange} />
      </div>
      <div className='pt-5 lg:px-[300px]'>
        <h1 className='bg-neutral px-2 py-1 rounded text-white truncate'>{loadstring}</h1>
      </div>
      <div className='pt-5 lg:px-[300px]'>
        <button className="btn btn-block" onClick={copyToClipboard}><ClipboardList />Copy to Clipboard</button>
        {isCopied && (
          <div className="toast toast-end">
            <div className="alert alert-success">
              <span>Copied loadstring to Clipboard</span>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Content