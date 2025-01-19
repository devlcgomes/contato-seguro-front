import { useState } from "react";
import { Button } from "@radix-ui/themes";
import { User} from "@phosphor-icons/react";
import * as S from "./profileScreen.styles";

export const ProfileScreen = () => {
  const [userData, setUserData] = useState({
    name: "Usuario Contato Seguro",
    email: "biblioteca@contatoseguro.com.br",
    bio: "Apaixonado por livros e tecnologia",
    avatar: "",
  });

  const [preferences, setPreferences] = useState({
    emailNotifications: true,
    pushNotifications: false,
    weeklyDigest: true,
    newBookAlerts: true,
    authorUpdates: false,
  });

  const handleSave = () => {
    // Aqui iria a lógica para salvar as alterações
    alert("Alterações salvas com sucesso!");
  };

  return (
    <S.Container>
      <S.Header>
        <S.Title>Configurações de Perfil</S.Title>
        <S.Subtitle>Gerencie suas informações pessoais e preferências</S.Subtitle>
      </S.Header>

      <S.Section>
        <S.SectionTitle>Informações Pessoais</S.SectionTitle>
        <S.AvatarSection>
          <S.Avatar>
            {userData.avatar ? (
              <img src={userData.avatar} alt="Avatar" />
            ) : (
              <User size={40} />
            )}
          </S.Avatar>
          <S.AvatarInfo>
            <Button color="gray" variant="soft">
              Alterar foto
            </Button>
            <span style={{ fontSize: "14px", color: "#666" }}>
              JPG ou PNG até 2MB
            </span>
          </S.AvatarInfo>
        </S.AvatarSection>

        <S.FormGroup>
          <label htmlFor="name">Nome completo</label>
          <input
            id="name"
            type="text"
            value={userData.name}
            onChange={(e) => setUserData({ ...userData, name: e.target.value })}
          />
        </S.FormGroup>

        <S.FormGroup>
          <label htmlFor="email">E-mail</label>
          <input
            id="email"
            type="email"
            value={userData.email}
            onChange={(e) => setUserData({ ...userData, email: e.target.value })}
          />
        </S.FormGroup>

        <S.FormGroup>
          <label htmlFor="bio">Biografia</label>
          <input
            id="bio"
            type="text"
            value={userData.bio}
            onChange={(e) => setUserData({ ...userData, bio: e.target.value })}
          />
        </S.FormGroup>
      </S.Section>

      <S.Section>
        <S.SectionTitle>Preferências de Notificação</S.SectionTitle>
        <S.PreferencesGrid>
          <S.PreferenceItem>
            <input
              type="checkbox"
              id="emailNotifications"
              checked={preferences.emailNotifications}
              onChange={(e) =>
                setPreferences({
                  ...preferences,
                  emailNotifications: e.target.checked,
                })
              }
            />
            <label htmlFor="emailNotifications">Notificações por e-mail</label>
          </S.PreferenceItem>

          <S.PreferenceItem>
            <input
              type="checkbox"
              id="pushNotifications"
              checked={preferences.pushNotifications}
              onChange={(e) =>
                setPreferences({
                  ...preferences,
                  pushNotifications: e.target.checked,
                })
              }
            />
            <label htmlFor="pushNotifications">Notificações push</label>
          </S.PreferenceItem>

          <S.PreferenceItem>
            <input
              type="checkbox"
              id="weeklyDigest"
              checked={preferences.weeklyDigest}
              onChange={(e) =>
                setPreferences({
                  ...preferences,
                  weeklyDigest: e.target.checked,
                })
              }
            />
            <label htmlFor="weeklyDigest">Resumo semanal</label>
          </S.PreferenceItem>

          <S.PreferenceItem>
            <input
              type="checkbox"
              id="newBookAlerts"
              checked={preferences.newBookAlerts}
              onChange={(e) =>
                setPreferences({
                  ...preferences,
                  newBookAlerts: e.target.checked,
                })
              }
            />
            <label htmlFor="newBookAlerts">Alertas de novos livros</label>
          </S.PreferenceItem>

          <S.PreferenceItem>
            <input
              type="checkbox"
              id="authorUpdates"
              checked={preferences.authorUpdates}
              onChange={(e) =>
                setPreferences({
                  ...preferences,
                  authorUpdates: e.target.checked,
                })
              }
            />
            <label htmlFor="authorUpdates">Atualizações de autores</label>
          </S.PreferenceItem>
        </S.PreferencesGrid>
      </S.Section>

      <S.ButtonsContainer>
        <Button color="gray" variant="soft">
          Cancelar
        </Button>
        <Button color="orange" onClick={handleSave}>
          Salvar alterações
        </Button>
      </S.ButtonsContainer>
    </S.Container>
  );
};
