import { Dialog, Button } from "@radix-ui/themes";
import * as S from "./styles";
import { WarningCircle } from "@phosphor-icons/react";

interface DeleteConfirmationDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
  description: string;
}

export function DeleteConfirmationDialog({
  isOpen,
  onClose,
  onConfirm,
  title,
  description,
}: DeleteConfirmationDialogProps) {
  return (
    <Dialog.Root open={isOpen} onOpenChange={onClose}>
      <S.ModalContent>
        <S.Header>
          <WarningCircle size={24} />
          <Dialog.Title>{title}</Dialog.Title>
        </S.Header>

        <S.Description>{description}</S.Description>

        <S.ButtonsContainer>
          <Button type="button" onClick={onConfirm} color="red" variant="solid">
            Confirmar
          </Button>
          <Button type="button" onClick={onClose} color="gray" variant="soft">
            Cancelar
          </Button>
        </S.ButtonsContainer>
      </S.ModalContent>
    </Dialog.Root>
  );
}
