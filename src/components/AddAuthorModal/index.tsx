import { Button, Dialog, Flex, Text } from "@radix-ui/themes";
import { X } from "@phosphor-icons/react";
import * as S from "./addAuthorModal.styles";
import { useState, ChangeEvent } from "react";

interface AddAuthorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddAuthor: (author: { name: string; email: string }) => void;
}

export function AddAuthorModal({
  isOpen,
  onClose,
  onAddAuthor,
}: AddAuthorModalProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAddAuthor({ name, email });
    setName("");
    setEmail("");
    onClose();
  };

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  return (
    <Dialog.Root open={isOpen} onOpenChange={onClose}>
      <Dialog.Content style={{ maxWidth: 450 }}>
        <S.Header>
          <Text size="5" weight="bold">
            Adicionar novo autor
          </Text>
          <Button variant="ghost" onClick={onClose}>
            <X size={24} />
          </Button>
        </S.Header>

        <form onSubmit={handleSubmit}>
          <Flex direction="column" gap="4">
            <Flex direction="column" gap="2">
              <Text size="2" weight="bold">
                Nome do autor
              </Text>
              <S.Input
                type="text"
                placeholder="Digite o nome do autor"
                value={name}
                onChange={handleNameChange}
                required
              />
            </Flex>

            <Flex direction="column" gap="2">
              <Text size="2" weight="bold">
                Email
              </Text>
              <S.Input
                type="email"
                placeholder="Digite o email do autor"
                value={email}
                onChange={handleEmailChange}
                required
              />
            </Flex>

            <Flex gap="3" mt="4" justify="end">
              <Button variant="soft" color="gray" onClick={onClose}>
                Cancelar
              </Button>
              <Button type="submit" color="orange">
                Adicionar autor
              </Button>
            </Flex>
          </Flex>
        </form>
      </Dialog.Content>
    </Dialog.Root>
  );
}
