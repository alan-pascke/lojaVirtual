'use client'
import musicStoreAPI from '@/api/musicStoreAPI';
import {initMercadoPago, StatusScreen} from '@mercadopago/sdk-react'
import {Payment} from '@mercadopago/sdk-react'
import { useState } from 'react';
initMercadoPago('TEST-960ae8e5-6dab-4d6e-a433-a6d9ceb1bcd3')



export default function PaymentPage() {

  const [paymentId, setPaymentId] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [paymentStatus, setPaymentStatus] = useState<string | null>(null);
  

  const initialization = {
    amount: 100,
    paymentId: `${paymentId}`
  };
  const customization = {
    paymentMethods: {
      ticket: "all",
      bankTransfer: "all",
      creditCard: "all",
      debitCard: "all",
      mercadoPago: "all",
    },
  };
  const onSubmit = async ({ selectedPaymentMethod, formData }: any ) => {
    // callback chamado ao clicar no botão de submissão dos dados
    try {
      const response = await musicStoreAPI.post(`/process_payment`, { formData, selectedPaymentMethod });
      console.log('Resposta do pagamento:', response.data);
      setPaymentStatus(response.data.status);
      setPaymentId(response.data.id)
    } catch (error) {
      console.error('Erro ao processar o pagamento:', error);
      throw error;
    }
  };
  const onError = async (error: any) => {
  // callback chamado para todos os casos de erro do Brick
  console.log(error);
  return error 
  };
  const onReady = async () => {
  /*
    Callback chamado quando o Brick estiver pronto.
    Aqui você pode ocultar loadings do seu site, por exemplo.
  */
  };

   return (
    <div className='flex h-full items-center  justify-center'>
      <Payment
          initialization={initialization}
          customization={customization as any}
          onSubmit={onSubmit}
          onReady={onReady}
          onError={onError}
          
        />
      { paymentStatus? (
        <StatusScreen
          initialization={initialization}
          
        /> 
      ): null }
    </div>
  )
    
};
