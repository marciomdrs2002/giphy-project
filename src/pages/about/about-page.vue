<template>
  <q-page padding>
    <div class="row justify-center">
      <div class="col-12 col-md-8">
        <q-card class="q-pa-lg">
          <div class="text-h4 text-primary q-mb-md">Sobre o Projeto</div>

          <div class="text-h6 q-mb-sm">Propósito</div>
          <p class="text-body1 q-mb-lg">
            Este projeto foi desenvolvido como parte de um teste técnico, com o objetivo de criar
            uma aplicação web para busca e gerenciamento de GIFs utilizando a API do GIPHY. A
            aplicação permite aos usuários:
          </p>
          <ul class="text-body1 q-mb-lg">
            <li>Visualizar GIFs em tendência na página inicial</li>
            <li>Pesquisar GIFs por palavras-chave</li>
            <li>Favoritar GIFs preferidos</li>
            <li>Explorar GIFs por categorias</li>
          </ul>

          <q-separator class="q-my-lg" />

          <div class="text-h6 q-mb-sm">Tecnologias Utilizadas</div>
          <ul class="text-body1 q-mb-lg">
            <li>Vue.js 3 com Composition API</li>
            <li>Quasar Framework para UI</li>
            <li>GIPHY API para dados dos GIFs</li>
            <li>Pinia para gerenciamento de estado</li>
            <li>Axios para requisições HTTP</li>
          </ul>

          <q-separator class="q-my-lg" />

          <div class="text-h6 q-mb-sm">Desenvolvedor</div>
          <div class="row items-center q-mb-md">
            <q-avatar size="120px" class="q-mr-md">
              <img src="images/dev.jpg" />
            </q-avatar>
            <div>
              <div class="text-h5">Márcio de Medeiros</div>
              <div class="text-subtitle1 text-grey-7">Desenvolvedor Full Stack - PHP e Vue.js</div>
              <div class="q-mt-sm">
                <q-btn
                  flat
                  dense
                  color="primary"
                  icon="commit"
                  type="a"
                  href="https://github.com/marciomdrs2002"
                  target="_blank"
                  class="q-mr-sm"
                >
                  <q-tooltip>GitHub</q-tooltip>
                </q-btn>
                <q-btn
                  flat
                  dense
                  color="primary"
                  icon="work"
                  type="a"
                  href="https://linkedin.com/in/marciomdrs/"
                  target="_blank"
                >
                  <q-tooltip>LinkedIn</q-tooltip>
                </q-btn>
              </div>
            </div>
          </div>

          <div class="text-body1">
            Desenvolvedor apaixonado por criar soluções web modernas e intuitivas, com experiência
            em Vue.js, React, Node.js e outras tecnologias do ecossistema JavaScript.
          </div>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script setup>
</script>

<style lang="scss" scoped>
ul {
  list-style-type: none;
  padding-left: 0;

  li {
    margin-bottom: 8px;
    position: relative;
    padding-left: 24px;

    &:before {
      content: '•';
      color: var(--q-primary);
      position: absolute;
      left: 8px;
    }
  }
}
</style>
