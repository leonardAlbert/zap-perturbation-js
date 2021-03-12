# ZAP Perturbation JS

Script tosco em JS para envio de mensagens em grupo do WhatsApp Web.

#### O que esse script faz?
<p>Envia uma mensagem pré-definida para um usuário alvo selecionado sempre que o mesmo enviar uma nova mensagem dentro do grupo.</p>

## Utilização

#### 1. Abrir o WhatsApp Web
<p>https://web.whatsapp.com/</p>

#### 2. Selecionar o grupo ao qual as mensagens serão disparadas.

#### 3. Abrir o "Ferramentas do Desenvolvedor".
<p>Atalho no teclado: "Ctrl + Shift + I" ou "Ctrl + Shift + J"</p>

#### 4. Na aba "console" colar todo o script/texto do arquivo "index.js".

#### 5. Na ultima linha do script colado no passo 4 adicionar o alvo e o texto.
<p>Adicionar a linha "disturbUserGroup('ALVO', 'TEXTO')".<br/>
- O "ALVO" é o nome do usuário que aparece para você, se ele estiver em sua lista de contatos será o nome que está adicionado lá, caso não esteja em sua lista de contatos será o número de telefone que aparece para você.<br/>
- O "TEXTO" será a mensagem de texto que será enviada para o alvo.<br/>
<br/>
* Importante:<br/>
- Seguir os exemplos das ultimas linhas do arquivo index.js.<br/>
- Tanto o "ALVO" quanto o "TEXTO" deverão estar dentro de aspas simples.
</p>

#### 6. Após completar o passo 5 pressione "Enter" no teclado para o script iniciar.

#### Limitações.
<p>
- Para o script funcionar corretamente você não pode sair da janela do grupo.<br/>
- Não é possível selecionar mais de um usuário ou grupo para disparo da mensagem.
 </p>
 
<br/>
<br/>

`Atenção: Não me responsabilizo pelas consequências do uso desse script, use por sua conta e risco.`
