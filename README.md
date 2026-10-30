checkout-ecommerce/
|-- README.md
|-- .gitignore
‘-- checkout.js
O projeto pega os itens calcula o subtotal, quantidade e aplica o frete e o total da compra com o desconto aplicado.

Para executar você manda os itens com o valor e quantidade e o cupom se haver algum.

O projeto usa um fluxo simples com três tipos de branch:

Branch	Papel
main	Código estável e pronto para produção. Só recebe merge vindo de develop. Ninguém faz commit direto nela.
develop	Branch de integração. Reúne as funcionalidades já prontas para serem testadas juntas antes de irem para a main.
feature/*	Uma branch para cada nova funcionalidade ou correção, criada a partir da develop (ex.: feature/carrinho, feature/cupom, feature/checkout). Ao terminar, é mesclada de volta na develop.

No incidente, uma alteração no código do checkout foi feita diretamente sobre a versão em uso, sem controle de versões. Isso causou cobrança incorreta e não havia como saber quem mudou o quê nem como voltar para a versão que funcionava.

Com Git e o fluxo, isso teria sido evitado porque:

Isolamento: cada mudança nasceria em uma feature/*, sem tocar na main. Um código com defeito não chegaria aos clientes.
Histórico: cada commit registra autor, data e mensagem, então seria possível identificar exatamente qual alteração causou o erro (git log, git blame).
Reversão rápida: com a versão anterior salva, bastaria desfazer o commit problemático (git revert) ou voltar à versão estável da main.
Revisão antes de publicar: o código passaria pela develop, onde seria testado e revisado antes do merge na main.
Trabalho em equipe sem sobrescrever: duas pessoas alterando o mesmo arquivo em branches diferentes teriam os conflitos mostrados no merge, em vez de uma versão apagar a outra sem aviso.
Segredos protegidos: o .gitignore impede que arquivos como .env sejam enviados ao repositório por engano.
