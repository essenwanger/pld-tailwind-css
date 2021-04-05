import img from './../assets/BBVA_TC_PROMO_S100.png'

function InitialPage() {
  return (
    <div className="max-w-5xl mx-auto">
      <div className="grid grid-cols-5 gap-4 mt-8">
        <div className="col-span-3">
          <div className="text-3xl mb-2">Pide tu tarjeta de crédito y paga hasta en</div>
          <div className="text-3xl text-green-700 mb-4">12 cuotas sin intereses</div>
          <div className="text-gray-600 mb-8">¡Pide aquí tu nueva tarjeta de crédito y compra todo lo que quieras!</div>
          <div className="text-blue-500 mb-2">Ver beneficios</div>
          <div className="text-gray-600">Ingresa los datos de tu documento de identidad</div>
          <div className="grid grid-cols-2 gap-2">
            <input className="bg-gray-200" />
            <input className="bg-gray-200" />
            <input className="bg-gray-200" />
            <input className="bg-gray-200" />
          </div>
        </div>
        <div className="col-span-2">
          <img src={img} /> 
        </div>
        <div className="col-span-5">
          <span className="text-gray-600">Lee nuestra 
            <span className="text-blue-500"> Política de privacidad</span>
            , y si deseas autoriza el tratamiento de tus datos para fines comerciales
          </span>
        </div>
        <div className="col-span-5">
          <button className="py-4 px-10 bg-gray-200 text-gray-500">Empezar</button>
        </div>
      </div>
    </div>
  );
}

export default InitialPage;
