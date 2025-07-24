import { Connexion,User } from "../Type/typeUser";

// ✅ Fonction utilitaire pure, sans hook
export async function ConnexionUser(
  formData: Connexion,
  setUser: (user: User) => void
) {
  if (!formData.email || !formData.password) return;

  try {
    const response = await fetch('http://localhost:3003/api/auth', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await response.json();
    console.log('data.user', data.user)

    if (!response.ok) {
      throw new Error("Erreur lors de la connexion.");
    }
    if (typeof window !== "undefined") {
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user)); // Bonus : persister l'utilisateur
    }

    setUser({
      id: data.user.id,
      email: data.user.email,
      name: data.user.name,
      pays: data.user.pays,
      token: data.token,
      password: '',
      telephone:data.user.telephone,
      nom:data.user.name,
      id_user:data.user.id,
      prenom: data.user.prenom,
      userName: data.user.userName
    });

    return {
      user: data.user,
      token: data.token,
    };

  } catch (error) {
    console.error("Erreur connexion :", error);
    throw error;
  }
}
