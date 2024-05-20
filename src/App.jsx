import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='w-screen flex flex-col justify-center items-center'>
      <h1 className='text-center weight-200 font-bold text-4xl text-black '>FRAMEWORK - TAILWIND</h1>
      <h2 className='w-3/6 text-center text-xl text-black-100'>Como muitos frameworks, o tailwind vem para facilitar o desenvolvimento. Com ferramentas poderosas de grid, componentização, tudo isso sem criar centenas de arquivos css.</h2>
      
        <h1 class="text-2xl font-bold mb-4 m-48">Exemplo de Tailwind CSS</h1>
        
        <p class="text-gray-700 mb-4 m-8">Tailwind CSS é uma ferramenta utilitária de estilo CSS que permite criar rapidamente designs personalizados sem sair do HTML.</p>
        
        <div class="flex items-center space-x-4 m-48">
            <div class="w-12 h-12 bg-gray-300 rounded-full"></div>
            <div>
                <h2 class="text-lg font-semibold">Elementos Flexíveis</h2>
                <p class="text-gray-700">O Tailwind oferece classes para facilmente criar layouts flexíveis.</p>
            </div>
        </div>

        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Botão
        </button>
        
        <div class="mt-4">
            <input type="text" class="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500" placeholder="Digite algo..." />

        <div class="mt-4">
            <ul class="space-y-2">
                <li class="bg-black p-2 rounded">Item 1</li>
                <li class="bg-black p-2 rounded">Item 2</li>
                <li class="bg-black p-2 rounded">Item 3</li>
            </ul>
        </div>

    </div>
      
    </div>
  )
}

export default App
