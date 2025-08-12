import { Connexion,User } from "../Type/typeUser";
  const API_URL = process.env.NEXT_PUBLIC_API_URL;

// ✅ Fonction utilitaire pure, sans hook
export async function ConnexionUser(
  formData: Connexion,
  setUser: (user: User) => void
) {
  if (!formData.email || !formData.password) return;

  try {
    const response = await fetch(`${API_URL}/api/auth`, {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    const contentType = response.headers.get('content-type');

    if (!contentType || !contentType.includes('application/json')) {
      const text = await response.text();
      alert(text)
      console.error("Réponse non-JSON :", text); // ← utile en dev
      throw new Error("Réponse du serveur non valide (non-JSON)");
    }
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
      userName: data.user.userName,
      role:data.user.role
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
