'use client';

import { SimpleWidget } from '@/components';
import { useAppSelector } from '@/store';
import { IoCartOutline } from 'react-icons/io5';



export const WidgetsGrid = () => {

    const count = useAppSelector( state => state.counter.count );

  return (
    <div className="flex flex-wrap p-2 items-center justify-center">
        <SimpleWidget 
            title={count.toString()} 
            label='Contador' 
            subTitle='Productos en carrito de compras' 
            icon={(<IoCartOutline size={50} className="text-blue-600" />)}  
            href='/dashboard/counter'
        />
      </div>
  )
}
