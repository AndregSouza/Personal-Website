import { Sidebar } from "@/components/sidebar";
import { Card, CardContent, CardHeader, CardImage, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function Home() {
  return (
    <div className="grid min-h-screen ml-64 bg-gray-200">
      <Sidebar></Sidebar>
      <div className="flex flex-col bg-white m-4 rounded-lg overflow-auto custom-height">
        <main className="flex flex-1 flex-col max-w-6xl gap-4 lg:gap-12 lg:p-12 self-center bg-white">
          <section className="flex flex-1 flex-col gap-4">
            <Avatar>
              <AvatarImage src="/profilePicture.png" alt="Profile Picture" />
              <AvatarFallback>AS</AvatarFallback>
            </Avatar>
            <div>
              <h1 className="text-2xl font-bold md:text-md"> André Souza </h1>
              <h2 className="text-xl md:text-md"> Senior Product Designer </h2>
            </div>
            <p className="text-md md:text-md max-w-xl"> Designing and building delightful products, interfaces, and interactions. <br/  > I’m currently living in Brazil and working at Stone.co. <br />I previously worked at Pagar.me and Try.</p>
          </section>

          <section className="flex flex-1 flex-col gap-y-4">
            <div className="flex justify-between">
              <h3 className="text-md font-semibold md:text-2xl self-center" > Projects </h3>
              <Link href="/projects">
                <Button variant="ghost"> View all </Button>
              </Link>
            </div>

            <div className="grid grid-cols-3 gap-8">
              <Card>
                <CardImage src="home_lumini-p-1080.png"></CardImage>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-xl font-bold">Meet's Assistant</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-sm font-medium">The free and privacy-friendly screen recorder with no limits. It has over 180K users, and was featured on Fast Company as one of the best apps of 2020.</div>
                  <p className="text-xs text-muted-foreground">Sep 2020</p>
                </CardContent>
              </Card>
              <Card>
                <CardImage src="home_linkme-p-1080.png"></CardImage>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-2xl font-bold">Stone PDV</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-sm font-medium">Compound merged with Alternativ to form a new $1B+ RIA</div>
                  <p className="text-xs text-muted-foreground">Sep 2020</p>
                </CardContent>
              </Card>
              <Card>
                <CardImage src="test.png"></CardImage>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-2xl font-bold">Pagar.me</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-sm font-medium">Compound merged with Alternativ to form a new $1B+ RIA</div>
                  <p className="text-xs text-muted-foreground">Sep 2020</p>
                </CardContent>
              </Card>
            </div>
          </section>

          <section className="flex flex-1 flex-col gap-y-4">
            <div className="flex justify-between">
              <h3 className="text-md font-semibold md:text-2xl self-center" > Writing </h3>
              <Link href="/projects">
                <Button variant="ghost">View all</Button>
              </Link>
            </div>

            <div className="grid grid-cols-4 gap-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-2xl font-bold">Meet's Assistant</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-sm font-medium">Compound merged with Alternativ to form a new $1B+ RIA</div>
                  <p className="text-xs text-muted-foreground">Sep 2020</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-2xl font-bold">Stone PDV</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-sm font-medium">Compound merged with Alternativ to form a new $1B+ RIA</div>
                  <p className="text-xs text-muted-foreground">Sep 2020</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-2xl font-bold">Pagar.me</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-sm font-medium">Compound merged with Alternativ to form a new $1B+ RIA</div>
                  <p className="text-xs text-muted-foreground">Sep 2020</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-2xl font-bold">Link.me</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-sm font-medium">Evolving a payment link app for brick-and-mortar businesses to sell online.</div>
                  <p className="text-xs text-muted-foreground">Sep 2020</p>
                </CardContent>
              </Card>
            </div>
          </section>

          <section className="flex flex-1 flex-col gap-y-4">
            <div className="flex justify-between">
              <h3 className="text-md font-semibold md:text-2xl self-center" > Photography </h3>
              <Link href="/projects">
                <Button variant="ghost">View all</Button>
              </Link>
            </div>

            <div className="grid grid-cols-4 gap-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-2xl font-bold">Meet's Assistant</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-sm font-medium">Compound merged with Alternativ to form a new $1B+ RIA</div>
                  <p className="text-xs text-muted-foreground">Sep 2020</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-2xl font-bold">Stone PDV</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-sm font-medium">Compound merged with Alternativ to form a new $1B+ RIA</div>
                  <p className="text-xs text-muted-foreground">Sep 2020</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-2xl font-bold">Pagar.me</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-sm font-medium">Compound merged with Alternativ to form a new $1B+ RIA</div>
                  <p className="text-xs text-muted-foreground">Sep 2020</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-2xl font-bold">Link.me</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-sm font-medium">Evolving a payment link app for brick-and-mortar businesses to sell online.</div>
                  <p className="text-xs text-muted-foreground">Sep 2020</p>
                </CardContent>
              </Card>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
