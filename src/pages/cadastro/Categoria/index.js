import React,{useState} from 'react'
import PageDefault from '../../../components/PageDefault'
import { Link } from 'react-router-dom'
import FormField from '../../../components/FormField'


function CadastroCategoria(){
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  }
  const [categorias, setCategorias] = useState([]);
  const [values, setValues] = useState(valoresIniciais);


  function setValue (key, value) {
    setValues({
      ...values,
      [key]: value,
    })
  }
  function handleChange (infosDoEvento){
    setValue(
      infosDoEvento.target.getAttribute('name'),
      infosDoEvento.target.value
    )
    
  }

  return (
    <PageDefault>
      <h1>Cadastro de Categoria: {values.nome}</h1>

      <form onSubmit={function handleSubmit (infosDoEvento) {
        infosDoEvento.preventDefault();
        setCategorias([
          ...categorias,
          values
        ]);
        setValues({ valoresIniciais})
      }}>
        <FormField 
          label="Nome da Categoria"
          name="nome"
          type="text"
          value={values.nome}
          onChange={handleChange}
        />

        <FormField 
          label="Cor"
          name="cor"
          type="color"
          value={values.cor}
          onChange={handleChange}
        />
        <div>
            <label>
             Descrição:
            <textarea
              type="text"
              value={values.descricao}
              name="descricao"
              onChange={handleChange}
            />
            </label>
        </div>
        <FormField 
          label="Cor"
          name="cor"
          type="color"
          value={values.cor}
          onChange={handleChange}
        />
        {/*<div>
            <label>
            Cor
            <input
              type="color"
              value={values.cor}
              name="cor"
              onChange={handleChange}
            />
            </label>
        </div>*/}
        
        
        

        <button>
          Cadastrar
        </button>
      </form>

      <ul>
        {categorias.map((categoria, indice) => {
          return(
            <li key={`${categoria}${indice}`}>
              {categoria.nome}</li>
          )})}
        
      </ul>

      <Link to="/cadastro/categoria">
        Ir para home
      </Link>
    </PageDefault>
  )
}

export default CadastroCategoria;