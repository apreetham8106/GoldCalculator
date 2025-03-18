import React from 'react';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  icon: React.ReactNode;
  error?: string;
}

const InputField: React.FC<Props> = ({ label, icon, error, ...props }) => {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      <div className="relative">
        <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
          {icon}
        </div>
        <input
          {...props}
          className={`w-full pl-10 pr-4 py-2 border rounded-md focus:ring-yellow-500 focus:border-yellow-500 ${
            error ? 'border-red-500' : 'border-gray-300'
          }`}
        />
      </div>
      {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
    </div>
  );
};

export default InputField;