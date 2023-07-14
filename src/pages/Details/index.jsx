import { Container, Links ,Content} from "./style";

import { Tag } from "../../components/Tag";
import { Header } from "../../components/Header";
import { ButtonText } from "../../components/ButtonText";
import { Button } from "../../components/Button";
import { Section } from "../../components/Section";

export function Details() {
  return (
    <Container>
      <Header />
      <main>
        <Content>
          <ButtonText title="Excluir nota" />
          
          <h1>Introdução ao React</h1>
          
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo molestiae quis laboriosam et! Ipsa quasi officia minima, laboriosam corporis asperiores quisquam vel consequuntur veniam quo! Voluptate quos architecto autem dolores!</p>

          <Section title="Links úteis">
            <Links>
              <li>
                <a href="#">https://www.rocketseat.com.br/</a>
              </li>
              <li>
                <a href="#">https://www.rocketseat.com.br/</a>
              </li>
            </Links>
          </Section>

          <Section title="Marcadores">
            <Tag title="express" />
            <Tag title="nodejs" />
          </Section>

          <Button title="Voltar" />
        </Content>
      </main>
    </Container>
  );
}
