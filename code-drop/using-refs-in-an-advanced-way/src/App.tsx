import React, { useRef, useCallback, FormEvent } from 'react';
import './App.css';
import Input from './components/Input';
import Modal, { ModelHandles } from './components/Modal';

function App() {
  const nameInputRef = useRef<HTMLInputElement>(null);
  const acceptTermsRef = useRef({ value: false });
  const modalRef = useRef<ModelHandles>(null);

  const handleSubmit = useCallback((e: FormEvent) => {
    e.preventDefault();
    nameInputRef.current?.focus();

    console.log(nameInputRef.current?.value);
    console.log(acceptTermsRef.current.value);
  }, []);

  const handleAcceptTerms = useCallback(() => {
    acceptTermsRef.current.value = !acceptTermsRef.current.value;
  }, []);

  const handleOpenModal = useCallback(() => {
    modalRef.current?.openModal();
  }, [])

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Input 
          ref={nameInputRef} 
          name="name" 
          label="Nome completo" 
        />

        <button type="button" onClick={handleAcceptTerms}>
          Aceitar Termos
        </button>

        <button type="submit">Enviar</button>
      </form>

      <button onClick={handleOpenModal}>Abrir Modal</button>
      <Modal ref={modalRef} />
    </>
  );
}

export default App;
