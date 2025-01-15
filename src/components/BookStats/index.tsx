import { Text } from "@radix-ui/themes";
import * as S from "./styles";

export function BookStats() {
  return (
    <>
      <S.StatCard>
        <Text size="2" color="gray">
          Total Books
        </Text>
        <Text size="6" weight="bold">
          128
        </Text>
      </S.StatCard>

      <S.StatCard>
        <Text size="2" color="gray">
          Authors
        </Text>
        <Text size="6" weight="bold">
          45
        </Text>
      </S.StatCard>

      <S.StatCard>
        <Text size="2" color="gray">
          Genres
        </Text>
        <Text size="6" weight="bold">
          12
        </Text>
      </S.StatCard>

      <S.StatCard>
        <Text size="2" color="gray">
          Recent Added
        </Text>
        <Text size="6" weight="bold">
          8
        </Text>
      </S.StatCard>
    </>
  );
}
