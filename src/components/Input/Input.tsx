// import React, { type ReactNode } from "react";

// interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
//   label: string;
//   startIcon?: ReactNode;
//   endIcon?: ReactNode;
// }

// export const Input: React.FC<InputProps> = ({
//   label,
//   startIcon,
//   endIcon,
//   className = "",
//   ...props
// }) => {
//   return (
//     <div className={`relative w-full min-w-[200px] flex items-center ${className}`}>
      
//       {startIcon && (
//         <div className="absolute left-3 flex items-center pointer-events-none">
//           {startIcon}
//         </div>
//       )}

//       <input
//         type="text"
//         placeholder=" "
//         className={`
//           peer w-full rounded-md border border-blue-gray-300
//           bg-transparent px-3 py-3
//           text-blue-gray-700 text-sm
//           focus:border-2 focus:border-pink-500 focus:outline-none
//           transition-all
//           ${startIcon ? "pl-10" : ""}
//           ${endIcon ? "pr-10" : ""}
//         `}
//         {...props}
//       />

//       {endIcon && (
//         <div className="absolute right-3 flex items-center pointer-events-none">
//           {endIcon}
//         </div>
//       )}

//       <label
//         className={`
//           absolute left-3 top-3 text-blue-gray-500 text-sm
//           transition-all bg-white px-1
          
//           peer-placeholder-shown:text-blue-gray-500
//           peer-placeholder-shown:top-3
//           peer-placeholder-shown:text-sm

//           peer-focus:-top-2 peer-focus:text-xs
//           peer-focus:text-pink-500

//           peer-not-placeholder-shown:-top-2 peer-not-placeholder-shown:text-xs
//         `}
//       >
//         {label}
//       </label>
//     </div>
//   );
// };




import React, { type ReactNode } from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
}

export const Input: React.FC<InputProps> = ({
  label = 'label',
  startIcon,
  endIcon,
  className = "",
  ...props
}) => {
  return (
    <div className={`relative h-11 w-full min-w-[200px] ${className}`}>
      
      {startIcon && (
        <div className="absolute left-3 top-1/2 -translate-y-1/2 flex items-center pointer-events-none">
          {startIcon}
        </div>
      )}

      <input
        placeholder=" "
        className={`
          peer h-full w-full border-b border-blue-gray-200 bg-transparent
          pt-4 pb-1.5 px-3 text-sm text-blue-gray-700
          focus:border-pink-500 focus:outline-none
          transition-all
          ${startIcon ? "pl-10" : ""}
          ${endIcon ? "pr-10" : ""}
        `}
        {...props}
      />

      {endIcon && (
        <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center pointer-events-none">
          {endIcon}
        </div>
      )}

      <label
        className={`
          absolute left-3 -top-2.5 text-[11px] text-blue-gray-400
          transition-all
          peer-placeholder-shown:text-sm
          peer-placeholder-shown:top-2.5
          peer-placeholder-shown:text-blue-gray-500
          peer-focus:-top-2.5 peer-focus:text-[11px]
          peer-focus:text-pink-500
          ${startIcon ? "left-10" : ""}
        `}
      >
        {label}
      </label>
    </div>
  );
};

