"use client"

import { ShowMoreProps } from '@/types';
import { useRouter } from 'next/navigation';
import CustomButton from './CustomButton';
import { updateSearchParams } from '@/utils';

const ShowMore = ({ pageNumber , isNext }: ShowMoreProps) => {
    const router = useRouter()

    const handleNavigate = () => {
        const newLimit = (pageNumber + 1) * 10
        const newPathName = updateSearchParams('limit', String(newLimit))

        router.push(newPathName)
    }
    return (
        <div className='w-full flex-center gap-5 mt-10'>
           {!isNext && (
                <CustomButton 
                  title='Mostrar mais'
                  btnType='button'
                  containerStyles='bg-primary-blue rounded-full text-white'
                  handleClick={handleNavigate}  
                />
           )} 
        </div>
    )
}

export default ShowMore