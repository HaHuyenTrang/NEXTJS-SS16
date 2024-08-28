'use client'
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';
import { ChangeEvent, useState } from 'react';

export default function HomePage() {
    const [select,setSelect]= useState('')
    const route=useRouter()

    const t = useTranslations('HomePage');
    const handleChange=(e:ChangeEvent<HTMLSelectElement>)=>{
        if(e.target.value =="en"){
            route.push("/en")
        }else{
            route.push("/vi")
        }
    }
    return <>
        <h1>bài 4</h1>
     <h1>{t('title')}</h1>;
     <select onChange={handleChange} name="" id="">
        <option value="en">tiếng anh </option>
        <option value="vi">tiếng việt </option>

     </select>
     
     </>
}