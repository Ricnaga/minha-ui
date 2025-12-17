// https://tailwindflex.com/@abhirajk/accordion-2
// https://tailwindflex.com/@nikola-malecka/accordion-faq-3

import { tv, type VariantProps } from "tailwind-variants";

export const accordion = tv({
  slots: {
    accordionItem:
      "rounded-lg shadow-lg shadow-neutral-200 overflow-hidden w-full transition-colors bg-white",
    accordionHeader: "text-neutral-50 font-medium",
    accordionContent: "p-2",
  },
  variants: {
    variant: {
      primary: {
        accordionHeader:
          "flex items-center justify-between p-2 cursor-pointer w-full bg-linear-to-tr from-sky-600/60 to-sky-600",
        accordionContent: "bg-linear-to-tr from-sky-50/40 to-sky-50",
      },
      secondary: {
        accordionHeader:
          "flex items-center justify-between p-2 cursor-pointer w-full bg-linear-to-tr from-pink-600/60 to-pink-600",
        accordionContent: "bg-linear-to-tr from-pink-50/40 to-pink-50",
      },
      success: {
        accordionHeader:
          "flex items-center justify-between p-2 cursor-pointer w-full bg-linear-to-tr from-emerald-600/60 to-emerald-600",
        accordionContent: "bg-linear-to-tr from-emerald-50/40 to-emerald-50",
      },
      info: {
        accordionHeader:
          "flex items-center justify-between p-2 cursor-pointer w-full bg-linear-to-tr from-blue-600/60 to-blue-600",
        accordionContent: "bg-linear-to-tr from-blue-50/40 to-blue-50",
      },
      warning: {
        accordionHeader:
          "flex items-center justify-between p-2 cursor-pointer w-full bg-linear-to-tr from-amber-600/60 to-amber-600",
        accordionContent: "bg-linear-to-tr from-amber-50/40 to-amber-50",
      },
      error: {
        accordionHeader:
          "flex items-center justify-between p-2 cursor-pointer w-full bg-linear-to-tr from-red-600/60 to-red-600",
        accordionContent: "bg-linear-to-tr from-red-50/40 to-red-50",
      },
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

export type AccordionVariants = VariantProps<typeof accordion>;

// <div class="bg-white rounded-lg shadow-lg overflow-hidden">
//     <input type="checkbox" id="accordion1" class="peer hidden">
//     <label for="accordion1" class="flex items-center justify-between p-4 bg-blue-600 text-white cursor-pointer hover:bg-blue-700 transition-colors">
//         <span class="text-lg font-semibold">Professional Profile</span>
//         <svg class="w-6 h-6 transition-transform peer-checked:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
//         </svg>
//     </label>
//     <div class="max-h-0 overflow-hidden transition-all duration-300 peer-checked:max-h-screen">
//         <div class="p-4">
//             <a href="https://abhirajk.vercel.app/" target="_blank" class="block">
//                 <img src="https://res.cloudinary.com/djv4xa6wu/image/upload/v1735722165/AbhirajK/Abhirajk.webp" alt="Abhiraj K Professional" class="w-full h-64 object-cover rounded-lg mb-4">
//             </a>
//             <p class="text-gray-700 leading-relaxed">Full-stack developer with expertise in modern web technologies and a passion for creating innovative solutions.</p>
//         </div>
//     </div>
// </div>
