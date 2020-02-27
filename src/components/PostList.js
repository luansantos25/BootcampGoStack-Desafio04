import React, { Component } from 'react';
import Post from './Post';
import './PostList.css';

class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: "Julio Alcantara",
          avatar: "http://url-da-imagem.com/imagem.jpg"
        },
        date: "04 Jun 2019",
        content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
        comments: [
          {
            id: 1,
            author: {
              name: "Diego Fernandes",
              avatar: "http://url-da-imagem.com/imagem.jpg"
            },
            content: "Cara. Estamos sempre contratando novos profissionais, principalmente os que gostam de dar aula em vídeo."
          },
          {
            id: 2,
            author: {
              name: "João Batista",
              avatar: "http://url-da-imagem.com/imagem.jpg"
            },
            content: "Os caras sempre divulgam vagas no portal. Fica de olho!"
          }          
        ]
      },
      {
        id: 2,
        author: {
          name: "Gabriel Santos",
          avatar: "http://url-da-imagem.com/imagem.jpg"
        },
        date: "03 Jun 2019",
        content: "Fala Galera! Alguém poderia me indicar um material bacana sobre Redux?",
        comments: [
          {
            id: 1,
            author: {
              name: "Luan Santos",
              avatar: "http://url-da-imagem.com/imagem.jpg"
            },
            content: "Cara. Dá uma olhada no bootcamp da Rocketseat. Tem um material incrível!"
          }
        ]
      }, 
      {
        id: 3,
        author: {
          name: "Bruno Augusto",
          avatar: "http://url-da-imagem.com/imagem.jpg"
        },
        date: "02 Jun 2019",
        content: "Quem aí conhece a fundo o conceito de cloud computing? Cloud computing ou computação em nuvem é a entrega da computação como um serviço ao invés de um produto, onde recursos compartilhados, software e informações são fornecidas, permitindo o acesso através de qualquer computador, tablet ou celular conectado à Internet.",
        comments: [
          {
            id: 1,
            author: {
              name: "Géssica Santos",
              avatar: "http://url-da-imagem.com/imagem.jpg"
            },
            content: "Uma de suas vantagens é o melhor aproveitamento dos investimentos em hardware. Como a parte mais pesada do processamento fica na “nuvem”, o usuário pre­cisa apenas de um navegador e uma boa conexão à internet para utilizar o serviço."
          },
          {
            id: 2,
            author: {
              name: "Carlos Nascimento",
              avatar: "http://url-da-imagem.com/imagem.jpg"
            },
            content: "Outra vantagem é a elasticidade. Se for necessário mais ou menos espaço para armazenamento, basta solicitar um upgrade, sem precisar da troca dos equipamentos."
          } ,
          {
            id: 3,
            author: {
              name: "André Souza",
              avatar: "http://url-da-imagem.com/imagem.jpg"
            },
            content: "Um bom exemplo de cloud computing são os serviços do Dropbox, Google Music, iCloud e Google Docs, onde os usuários podem criar e editar documentos online, sincronizar músicas e arquivos ao mesmo tempo. Para usar o serviço, basta abrir o navegador de Internet e acessar o endereço dos serviços escolhidos."
          }                     
        ]
      },                 
    ]
  };

  render() {
    return (
      <section className="post-list">
        {this.state.posts.map(post => <Post key={ post.id } data={ post } />)}
      </section>
    )
  }
}

export default PostList;