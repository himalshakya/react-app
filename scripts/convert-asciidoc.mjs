import Asciidoctor from 'asciidoctor';

const asciidoctor = Asciidoctor();

asciidoctor.convertFile('doc/main.adoc', {
  safe: 'safe',
  attributes: {
    linkcss: true
  }
});