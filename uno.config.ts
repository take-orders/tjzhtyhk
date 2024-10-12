import { defineConfig } from 'unocss';

export default defineConfig({
  safelist: ['color-blue'],
  shortcuts: {
    'k-ellipsis': 'whitespace-nowrap overflow-hidden text-ellipsis',
    'k-full': 'w-full h-full',
    'k-center': 'flex items-center justify-center',
    'k-content': 'bg-white p-4 rounded',
    'k-b': 'b-1 b-solid b-gray-1',
    'k-bg-full': 'bg-[length:100%_100%] bg-no-repeat',
  },
});
