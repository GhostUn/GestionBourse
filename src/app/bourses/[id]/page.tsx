'use client'
import React, { useEffect, useState,use } from 'react'
import { notFound } from 'next/navigation';
import BourseDetails from '@/component/BourseDetails'
import Navbar from '@/component/navbar'
import { getBourseById } from '@/app/API/CreationBourse';
import { Bourse } from '@/app/Type/typeBourse';
interface PageProps {
  params: {
    id: number;
  };
}

const Page = ({ params }: { params: Promise<{ id: string }> }) => {
 const { id } = use(params)
  const [bourse, setBourse] = useState<any>();
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const fetchBourse = async () => {
      try {
        const data = await getBourseById(id);
        setBourse(data);
        console.log('data', data )
      } catch (error) {
        console.error('Erreur lors du chargement des détails de la bourse:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBourse();
  }, [id]);

  // ✅ Corrigé : attendre la fin du chargement avant de vérifier
  if (!loading && !bourse) {
    notFound();
  }

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12">
          <Navbar />
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          {loading ? (
            <p className="text-center">Chargement des détails de la bourse...</p>
          ) : (
            <BourseDetails bourse={bourse} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;
