# Atividade 3
Explicações de funcionalidades do javascript referentes à atividade 3
## Arrow
Uma função arrow em JavaScript é uma maneira concisa de escrever funções. Ela é definida usando uma sintaxe mais curta usando a seta `=>` . 

Basicamente, funções arrow são úteis quando você precisa de funções pequenas e simples. Elas têm algumas diferenças em relação às funções regulares, como não ter seu próprio valor `this` e serem mais curtas, mas são amplamente utilizadas em JavaScript moderno para tornar o código mais limpo e legível.

**Exemplo de uma função Arrow:**
~~~javascript
// Função regular
function  soma(a, b) { return a + b; } 

// Função arrow equivalente  
const  soma = (a, b) => a + b;
~~~

## Promise
Uma Promise em JavaScript é um objeto que representa um valor que pode estar disponível agora, no futuro ou nunca. Ela é usada principalmente para tratar operações assíncronas, como fazer solicitações de rede ou ler arquivos.

Uma Promise pode estar em um dos três estados:

1.  **Pending (Pendente)**: O estado inicial, onde a operação ainda não foi concluída.
2.  **Fulfilled (Cumprida)**: A operação foi bem-sucedida e o valor resultante está disponível.
3.  **Rejected (Rejeitada)**: A operação falhou e um motivo de falha é fornecido.

**Exemplo de uma função Promise:**
~~~javascript
const minhaPromise = new Promise((resolve, reject) => {
  // Simulando uma operação assíncrona
  setTimeout(() => {
    const sucesso = true;
    if (sucesso) {
      resolve("Operação bem-sucedida!");
    } else {
      reject("Houve um erro!");
    }
  }, 2000); // Espera 2 segundos
});

minhaPromise
  .then(resultado => {
    console.log(resultado); // Imprime "Operação bem-sucedida!"
  })
  .catch(erro => {
    console.error(erro); // Se a Promise for rejeitada
  });
~~~
