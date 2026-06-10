import { useState } from "react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import { User, Mail, Lock, PiggyBank } from "lucide-react"

export default function AuthPage() {
  const [mode, setMode] = useState("login")

  // Login state
  const [loginEmail, setLoginEmail] = useState("")
  const [loginPassword, setLoginPassword] = useState("")

  // Register state
  const [username, setUsername] = useState("")
  const [registerEmail, setRegisterEmail] = useState("")
  const [registerPassword, setRegisterPassword] = useState("")
  const [acceptedRgpd, setAcceptedRgpd] = useState(false)

  const handleLogin = (e) => {
    e.preventDefault()
    console.log("[v0] Login:", { email: loginEmail, password: loginPassword })
  }

  const handleRegister = (e) => {
    e.preventDefault()
    if (!acceptedRgpd) return
    console.log("[v0] Register:", {
      username,
      email: registerEmail,
      password: registerPassword,
      acceptedRgpd,
    })
  }

  return (
    <main className="flex min-h-svh items-center justify-center bg-background px-4 py-8">
      <div className="w-full max-w-md">
        {/* Brand */}
        <div className="mb-6 flex flex-col items-center text-center">
          <div className="flex size-14 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-lg shadow-primary/30">
            <PiggyBank className="size-8" aria-hidden="true" />
          </div>
          <h1 className="mt-3 text-2xl font-bold tracking-tight text-foreground">Piggy Plank</h1>
          <p className="mt-1 text-sm text-muted-foreground text-pretty">
            Gamifica tu deporte y supera cada reto físico
          </p>
        </div>

        <Card className="border-border/60 shadow-xl shadow-black/5">
          <CardHeader className="pb-2">
            {/* Tabs */}
            <div
              role="tablist"
              aria-label="Modo de autenticación"
              className="grid grid-cols-2 gap-1 rounded-xl bg-muted p-1"
            >
              <button
                type="button"
                role="tab"
                aria-selected={mode === "login"}
                onClick={() => setMode("login")}
                className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                  mode === "login"
                    ? "bg-card text-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Iniciar Sesión
              </button>
              <button
                type="button"
                role="tab"
                aria-selected={mode === "register"}
                onClick={() => setMode("register")}
                className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                  mode === "register"
                    ? "bg-card text-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Registrarse
              </button>
            </div>
          </CardHeader>

          <CardContent>
            {mode === "login" ? (
              <form onSubmit={handleLogin} className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <Label htmlFor="login-email">Correo electrónico</Label>
                  <div className="relative">
                    <Mail
                      className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"
                      aria-hidden="true"
                    />
                    <Input
                      id="login-email"
                      type="email"
                      placeholder="tucorreo@ejemplo.com"
                      className="pl-9"
                      value={loginEmail}
                      onChange={(e) => setLoginEmail(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <Label htmlFor="login-password">Contraseña</Label>
                  <div className="relative">
                    <Lock
                      className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"
                      aria-hidden="true"
                    />
                    <Input
                      id="login-password"
                      type="password"
                      placeholder="••••••••"
                      className="pl-9"
                      value={loginPassword}
                      onChange={(e) => setLoginPassword(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <Button type="submit" size="lg" className="mt-2 w-full font-semibold">
                  Entrar
                </Button>
              </form>
            ) : (
              <form onSubmit={handleRegister} className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <Label htmlFor="register-username">Nombre de usuario</Label>
                  <div className="relative">
                    <User
                      className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"
                      aria-hidden="true"
                    />
                    <Input
                      id="register-username"
                      type="text"
                      placeholder="atleta_01"
                      className="pl-9"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <Label htmlFor="register-email">Correo electrónico</Label>
                  <div className="relative">
                    <Mail
                      className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"
                      aria-hidden="true"
                    />
                    <Input
                      id="register-email"
                      type="email"
                      placeholder="tucorreo@ejemplo.com"
                      className="pl-9"
                      value={registerEmail}
                      onChange={(e) => setRegisterEmail(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <Label htmlFor="register-password">Contraseña</Label>
                  <div className="relative">
                    <Lock
                      className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"
                      aria-hidden="true"
                    />
                    <Input
                      id="register-password"
                      type="password"
                      placeholder="••••••••"
                      className="pl-9"
                      value={registerPassword}
                      onChange={(e) => setRegisterPassword(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-lg bg-muted/60 p-3">
                  <Checkbox
                    id="rgpd"
                    checked={acceptedRgpd}
                    onCheckedChange={(checked) => setAcceptedRgpd(checked === true)}
                    className="mt-0.5"
                  />
                  <Label htmlFor="rgpd" className="text-sm font-normal leading-relaxed text-muted-foreground">
                    Acepto la política de privacidad y el tratamiento de mis datos (RGPD)
                  </Label>
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="mt-1 w-full font-semibold"
                  disabled={!acceptedRgpd}
                >
                  Crear cuenta
                </Button>
              </form>
            )}
          </CardContent>
        </Card>

        <p className="mt-6 text-center text-xs text-muted-foreground">
          {mode === "login" ? "¿No tienes cuenta? " : "¿Ya tienes cuenta? "}
          <button
            type="button"
            onClick={() => setMode(mode === "login" ? "register" : "login")}
            className="font-semibold text-primary hover:underline"
          >
            {mode === "login" ? "Regístrate" : "Inicia sesión"}
          </button>
        </p>
      </div>
    </main>
  )
}
