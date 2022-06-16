# Flex Container

## Propriedades Relacionadas:

+ display
+ flex-direction
+ flex-wrap
+ flex-flow
+ justify-content
+ align-items
+ align-content



# flex-direction
## Propriedades Relacionadas:

+ flex-direction: row;
+ flex-direction: row-reverse;
+ flex-direction: column;
+ flex-direction: column-reverse;

# justify-content
## Propriedades Relacionadas:

+ justify-content: flex-start; (início do container.)
+ justify-content: flex-end; (final do container.)
+ justify-content: center; (ao centro do container.)
+ justify-content: space-between; (cria um espaçamento igual entre os elementos.)
+ justify-content: space-around; (os espaçamentos do meio são duas vezes maiores que o inicial e final.)

# align-items
## Propriedades Relacionadas:

+ align-items: center; (alinhamento dos itens ao centro)
+ align-items: stretch; (padrão, e os flex itens cresçam igualmente)
+ align-items: flex-start; (alinhamento dos itens no início)
+ align-items: flex-end; (alinhamento dos itens no final)
+ align-items: baseline; (alinhamento de acordo com a linha base da tipografia dos itens)

# align-content
## Propriedades Relacionadas:

+ align-content: center; (alinhamento dos itens ao centro)
+ align-content: stretch; (é o padrão e os flex itens crescem igualmente)
+ align-content: flex-start; (alinhamento dos itens no início)
+ align-content: flex-end; (alinhamento dos itens no final) 
+ align-content: between; (cria um espaçamento igual entre os elementos)
+ align-content: space-around; (os espaçamentos do meio são duas vezes maiores que o inicial e final)

# Flex-grow
Define a proporcionalidade de crescimento dos itens, respeirando o tamanho de seus conteúdos interno.
OBS: não irá funcinar caso tenhamos adicionado justify-content ao nosso flex container.

# Flex-basis
É a propriedade que estabelece o tamanho inicial do item antes da distribuição de espaço restante dentro dele, usando como base o connteúdo interno disposto
## Valores possíveis
+ flex-basis: auto; (caso o item não tenha tamanho, este será proporcional ao conteúdo do item.)
+ flex-basis: px, %; (são valores exatos previamente definidos)
+ flex-basis: 0; (terá relação com a definição do flex-grow)