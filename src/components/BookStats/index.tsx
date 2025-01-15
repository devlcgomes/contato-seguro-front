import { Text } from "@radix-ui/themes";
import * as S from "./styles";
import { Books, Users, BookmarkSimple, Clock } from "@phosphor-icons/react";

export function BookStats() {
  return (
    <>
      <S.StatCard>
        <S.IconWrapper variant="blue">
          <Books size={24} weight="bold" />
        </S.IconWrapper>
        <S.StatContent>
          <Text size="2" color="gray">
            Total Books
          </Text>
          <Text size="6" weight="bold">
            128
          </Text>
          <S.StatTrend positive>
            <Text size="1">+12% from last month</Text>
          </S.StatTrend>
        </S.StatContent>
      </S.StatCard>

      <S.StatCard>
        <S.IconWrapper variant="green">
          <Users size={24} weight="bold" />
        </S.IconWrapper>
        <S.StatContent>
          <Text size="2" color="gray">
            Authors
          </Text>
          <Text size="6" weight="bold">
            45
          </Text>
          <S.StatTrend positive>
            <Text size="1">+5% from last month</Text>
          </S.StatTrend>
        </S.StatContent>
      </S.StatCard>

      <S.StatCard>
        <S.IconWrapper variant="purple">
          <BookmarkSimple size={24} weight="bold" />
        </S.IconWrapper>
        <S.StatContent>
          <Text size="2" color="gray">
            Genres
          </Text>
          <Text size="6" weight="bold">
            12
          </Text>
          <S.StatTrend>
            <Text size="1">Same as last month</Text>
          </S.StatTrend>
        </S.StatContent>
      </S.StatCard>

      <S.StatCard>
        <S.IconWrapper variant="orange">
          <Clock size={24} weight="bold" />
        </S.IconWrapper>
        <S.StatContent>
          <Text size="2" color="gray">
            Recent Added
          </Text>
          <Text size="6" weight="bold">
            8
          </Text>
          <S.StatTrend positive>
            <Text size="1">+3 this week</Text>
          </S.StatTrend>
        </S.StatContent>
      </S.StatCard>
    </>
  );
}
