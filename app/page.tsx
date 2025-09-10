"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, Shield, Zap, ExternalLink, Copy, Diamond, ArrowUpDown } from "lucide-react"
import Image from "next/image"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Image src="/pepe-logo.png" alt="PEPES Logo" width={40} height={40} className="rounded-lg" />
            <span className="text-2xl font-bold text-foreground">$PEPES</span>
          </div>

          <div className="flex items-center space-x-3">
            <Button
              size="sm"
              className="bg-primary hover:bg-primary/90"
              onClick={() => document.getElementById("swap")?.scrollIntoView({ behavior: "smooth" })}
            >
              Buy $PEPES
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <Badge variant="secondary" className="mb-6 text-sm px-4 py-2">
            <Diamond className="mr-2 h-4 w-4" />💎 Diamond Hands Community
          </Badge>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance">
            Welcome to <span className="text-primary">$PEPES</span> Capital
          </h1>

          <p className="text-xl text-muted-foreground mb-8 text-pretty max-w-2xl mx-auto">
            The most authentic diamond-handed community on Solana. No bad actors, no rugs, just pure meme energy and
            diamond hands. Join the strongest holders in crypto.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-lg px-8"
              onClick={() => document.getElementById("swap")?.scrollIntoView({ behavior: "smooth" })}
            >
              <TrendingUp className="mr-2 h-5 w-5" />
              Buy $PEPES Now
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 bg-transparent" asChild>
              <a href="https://x.com/pepes_capital" target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-5 w-5" />
                Follow on X
              </a>
            </Button>
          </div>

          <div className="bg-card border border-border rounded-lg p-4 max-w-md mx-auto">
            <p className="text-sm text-muted-foreground mb-2">Solana Contract Address</p>
            <div className="flex items-center justify-between bg-muted rounded-md px-3 py-2">
              <code className="text-sm font-mono">BU3uNVaL8Ev5Ar2QvmHB5fndk8ppsZUyFo33gra9pump</code>
              <Button variant="ghost" size="sm">
                <Copy className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Swap Section */}
      <section id="swap" className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4 flex items-center justify-center gap-2">
              <ArrowUpDown className="h-8 w-8 text-primary" />
              Swap for $PEPES
            </h2>
            <p className="text-muted-foreground">Buy $PEPES directly with SOL or other tokens</p>
          </div>

          <div className="max-w-md mx-auto">
            <Card className="p-0 overflow-hidden">
              <iframe
                src="https://jup.ag/swap/SOL-BU3uNVaL8Ev5Ar2QvmHB5fndk8ppsZUyFo33gra9pump"
                width="100%"
                height="600"
                className="border-0"
                title="Jupiter Swap Widget"
              />
            </Card>
          </div>

          <div className="text-center mt-6">
            <p className="text-sm text-muted-foreground">
              Powered by Jupiter - The most trusted DEX aggregator on Solana
            </p>
          </div>
        </div>
      </section>

      {/* Chart Section */}
      <section id="chart" className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Live $PEPES Chart</h2>
            <p className="text-muted-foreground">Real-time price action on DexScreener</p>
          </div>

          <div className="max-w-6xl mx-auto">
            <Card className="p-0 overflow-hidden">
              <iframe
                src="https://dexscreener.com/solana/BU3uNVaL8Ev5Ar2QvmHB5fndk8ppsZUyFo33gra9pump?embed=1&theme=dark"
                className="w-full h-[600px] border-0"
                title="DexScreener Chart"
              />
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-primary mb-2">💎</div>
                <p className="text-muted-foreground">Diamond Hands Only</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-primary mb-2">🚫</div>
                <p className="text-muted-foreground">No Bad Actors</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-primary mb-2">🚀</div>
                <p className="text-muted-foreground">Pump.fun Launch</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-primary mb-2">0%</div>
                <p className="text-muted-foreground">Tax</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="about" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-balance">Why $PEPES is Different</h2>
            <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
              Built by diamond hands, for diamond hands. We've eliminated bad actors and created the strongest community
              on Solana.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Diamond className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>💎 Diamond Hands Community</CardTitle>
                <CardDescription>
                  Only the strongest holders. We don't sell, we accumulate. Diamond hands forever.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>🚫 No Bad Actors</CardTitle>
                <CardDescription>
                  We've built a community free from rugs, scams, and bad actors. Pure authentic vibes only.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>⚡ Pure Meme Energy</CardTitle>
                <CardDescription>
                  The strongest meme community on Solana. We're here for the culture and the gains.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section id="community" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Join the Diamond Hands Army</h2>
          <p className="text-xl text-muted-foreground mb-12">
            Connect with thousands of diamond-handed $PEPES holders. No paper hands allowed.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
            <Card className="p-6">
              <h3 className="text-xl font-bold mb-4">💎 What We Stand For</h3>
              <ul className="text-left space-y-2 text-muted-foreground">
                <li>✅ Diamond hands only - we HODL together</li>
                <li>✅ Zero tolerance for bad actors</li>
                <li>✅ Authentic meme culture</li>
                <li>✅ Community-driven decisions</li>
                <li>✅ Long-term vision</li>
              </ul>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-bold mb-4">🚫 What We Don't Allow</h3>
              <ul className="text-left space-y-2 text-muted-foreground">
                <li>❌ Paper hands and panic selling</li>
                <li>❌ Rug pulls and scams</li>
                <li>❌ Toxic behavior</li>
                <li>❌ Pump and dump schemes</li>
                <li>❌ Bad actors of any kind</li>
              </ul>
            </Card>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="outline" size="lg" className="text-lg bg-transparent" asChild>
              <a href="https://pump.fun/profile/hempmillionaire?tab=balances" target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-5 w-5" />
                Pump.fun Profile
              </a>
            </Button>
            <Button variant="outline" size="lg" className="text-lg bg-transparent" asChild>
              <a href="https://x.com/pepes_capital" target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-5 w-5" />
                Follow on X
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <Image src="/pepe-logo.png" alt="PEPES Logo" width={32} height={32} className="rounded-lg" />
              <span className="text-xl font-bold">$PEPES</span>
            </div>

            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <span>© 2024 $PEPES - Diamond Hands Capital</span>
              <span>💎 No Bad Actors Allowed</span>
              <span>🚀 Launched on Pump.fun</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
