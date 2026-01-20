import { motion } from "framer-motion";

export function AboutMe() {
  return (
    <section id="sobre-mim" className="py-16 md:py-24 section-darker noise-overlay relative">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-sm font-medium text-primary bg-primary/10 px-4 py-2 rounded-full border border-primary/30 inline-block mb-4">
            História Real
          </span>
          <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
            <span className="text-gold-gradient">Sobre Mim</span>
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="card-premium p-4 sm:p-6 md:p-8 lg:p-12 border-gold-gradient"
          >
            {/* Título Principal */}
            <div className="text-center mb-6 md:mb-8">
              <h3 className="font-serif text-xl sm:text-2xl md:text-3xl font-bold mb-2">
                Marcelo Almeida
              </h3>
              <p className="text-primary text-sm sm:text-base md:text-lg italic px-2">
                Onde a necessidade virou talento e o talento virou referência.
              </p>
            </div>

            {/* Conteúdo Principal */}
            <div className="space-y-4 sm:space-y-5 md:space-y-6 text-muted-foreground leading-relaxed text-sm sm:text-base text-center">
              <p className="text-base sm:text-lg font-semibold text-foreground">
                Eu não escolhi a barbearia.<br />
                Foi a barbearia que me escolheu.
              </p>

              <p>
                Minha história começa aos 16 anos, em um dos períodos mais desafiadores da minha vida. A perda da minha mãe mudou tudo. Eu ainda era um adolescente, meus irmãos eram pequenos, e meu pai — um homem trabalhador e honesto — lutava diariamente para manter a casa, mesmo sem condições financeiras suficientes para suprir todas as necessidades.
              </p>

              <p>
                Mesmo com pouco, meu pai me deu um presente que mudaria o rumo da minha vida: uma máquina de cortar cabelo. Naquele gesto simples nasceu algo muito maior do que ele poderia imaginar — nasceu o amor por uma profissão.
              </p>

              <p>
                Na época, não havia dinheiro para cursos ou especializações. O que havia era vontade. Todos os dias, eu observava de longe um cabeleireiro trabalhar. Silenciosamente, aprendia com os olhos, absorvendo cada movimento, cada detalhe.
              </p>

              <p>
                Até que um dia, incomodado com minha presença constante, ele me abordou e perguntou se eu tinha a intenção de assaltá-lo. Respondi imediatamente, com sinceridade no coração: jamais faria isso. Expliquei que meu único desejo era aprender a profissão, pois não tinha recursos para estudar.
              </p>

              <p>
                Aquela conversa mudou tudo. Sensibilizado pela minha história, ele me levou para dentro do salão e me ensinou técnicas simples de tesoura e máquina. Foi ali que surgiu a primeira oportunidade — e eu não a desperdicei.
              </p>

              <p>
                Com muito esforço, dedicação e disciplina, passei a estudar, treinar e praticar todos os dias. Comecei cortando o cabelo dos meus irmãos. Depois vieram os primeiros clientes. E assim, da forma mais simples possível, iniciei minha caminhada na barbearia.
              </p>

              <div className="pt-4 border-t border-border text-left">
                <p className="text-base sm:text-lg font-semibold text-foreground mb-2">
                  Hoje, aos 42 anos, vivo exclusivamente do meu talento.
                </p>
                <p>
                  Sou barbeiro visagista, educador e referência no Japão. Minha história não é sobre facilidade — é sobre superação, propósito e gratidão. A barbearia não apenas me deu uma profissão. Ela me deu um futuro.
                </p>
              </div>

              {/* Credenciais */}
              <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-border text-left">
                <div className="space-y-2">
                  <p className="text-foreground font-semibold text-sm sm:text-base">Minhas Credenciais:</p>
                  <ul className="space-y-1 text-xs sm:text-sm">
                    <li>• Sou barbeiro há mais de 20 anos</li>
                    <li>• Educador há 15 anos</li>
                    <li>• Visagista especializado pelo Instituto Juarez Leite</li>
                    <li>• Possuo diversas especializações em técnicas da beleza asiática realizados por profissionais qualificados no Japão</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
