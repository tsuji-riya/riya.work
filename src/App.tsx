import { Avatar, Heading, Label, Link, LinkButton, Stack, Text, VisuallyHidden } from '@primer/react'
import { LinkExternalIcon, MarkGithubIcon, RepoIcon } from '@primer/octicons-react'
import { NoiserText } from 'noisytext/react'

// shortcut: hand-maintained list of tsuji-riya/*.riya.work repos, add a row when a new subdomain ships
const sites = [
  {
    name: 'blog.riya.work',
    emoji: '📝',
    description: 'Quartz で作ったブログ。Obsidian で書いたノートをそのまま公開しています。',
    tags: ['Quartz', 'Obsidian', 'GitHub Pages'],
  },
  {
    name: 'anubis.riya.work',
    emoji: '🐺',
    description: 'Anubis のチェッカーを通ると、Anubis ちゃんを無限に出し続けるサイト。',
    tags: ['Anubis', 'nginx', 'Docker'],
  },
  {
    name: 'fantasy.riya.work',
    emoji: '🕹️',
    description: 'Fantasy Zone (アーケード版) をブラウザで遊ぶためのサイト。ROM は手元のものを使います。',
    tags: ['EmulatorJS', 'FBNeo'],
  },
]

const github = 'https://github.com/tsuji-riya'

// Newest era first; repos inside each era are newest-push first. Public repos only.
const works = [
  {
    title: '組み込み',
    emoji: '🐧',
    tags: ['Rockchip', 'Linux', 'U-Boot', 'OpenWrt', 'Alpine Linux'],
    repos: [
      { name: 'dsm232', description: 'D-Link DSM-232 (Celestial CNC1800L) に Linux + Alpine Linux を載せる' },
      { name: 'linux', description: 'わたしのリナックス ワークスペース 🐧' },
      { name: 'rk3229-tools', description: 'RK3229 の TV box で mainline U-Boot + Linux を動かすツール一式' },
      { name: 'u-boot', description: 'わたしのユーブート ワークスペース 🐬' },
      { name: 'rockchip-kernel', description: 'Rockchip の BSP カーネル' },
    ],
  },
  {
    title: 'おうち k3s',
    emoji: '☸️',
    tags: ['k3s'],
    repos: [{ name: 'lab', description: 'おうちの k3s クラスタを Terraform + Flux で GitOps 管理' }],
  },
  {
    title: 'Web アプリ',
    emoji: '🌐',
    tags: ['Vue', 'Nuxt', 'React'],
    repos: [
      { name: 'noisytext', description: 'テキストをザワザワさせる Vue / React コンポーネント (このページでも使用中)' },
      { name: 'lexical-learn', description: 'React + Lexical でエディタを作る練習' },
      { name: 'use-historical-state', description: '履歴つき state の React フック' },
    ],
  },
  {
    title: 'Minecraft サーバー',
    emoji: '⛏️',
    tags: ['PaperMC', 'BungeeCord', 'GitHub'],
    repos: [
      { name: 'MinecraftServer', description: 'Waterfall / Velocity / Paper / Folia の Docker イメージ' },
      { name: 'PlugMan', description: 'Bukkit サーバー用プラグインマネージャーのフォーク' },
    ],
  },
]

const games = [
  { name: 'Minecraft', emoji: '⛏️' },
  { name: 'Krunker', emoji: '🔫' },
  { name: 'Getting Over It', emoji: '🪨' },
  { name: 'Drain Simulator', emoji: '🚰' },
  { name: 'VALORANT', emoji: '🎯' },
  { name: 'Tiling Forest', emoji: '🌲' },
  { name: 'Half-Life: Alyx', emoji: '🥽' },
]

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

// Screen readers get the real text once; the scramble is visual only.
function Noisy({ text }: { text: string }) {
  if (reducedMotion) return text
  return (
    <>
      <VisuallyHidden>{text}</VisuallyHidden>
      <span aria-hidden="true">
        <NoiserText>{text}</NoiserText>
      </span>
    </>
  )
}

export default function App() {
  return (
    <div className="page">
      <header className="header">
        <Stack direction="horizontal" align="center" gap="condensed">
          <Avatar src="/avatar.png" alt="" size={32} />
          <Text weight="semibold" size="large">
            riya.work <span aria-hidden="true">🎀</span>
          </Text>
        </Stack>
        <LinkButton href={github} leadingVisual={MarkGithubIcon} variant="invisible">
          GitHub
        </LinkButton>
      </header>

      <main className="main">
        <section className="hero">
          <Avatar src="/avatar.png" alt="Riya のアバター" size={96} className="hero-avatar" />
          <Heading as="h1" className="hero-title">
            <Noisy text="Hi, I'm Riya 😺" />
          </Heading>
          <Text as="p" className="hero-text">
            <Noisy text="I'm a programmer from Japan 🇯🇵 — その日の気分でなんでもいじる人。" />
          </Text>
        </section>

        <section aria-labelledby="sites">
          <Heading as="h2" id="sites" variant="medium" className="section-title">
            <span aria-hidden="true">🎀</span> <Noisy text="Sites" />
          </Heading>
          <ul className="sites">
            {sites.map((site) => (
              <li key={site.name} className="card">
                <Heading as="h3" variant="small">
                  <span aria-hidden="true">{site.emoji}</span>{' '}
                  <Link href={`https://${site.name}`}>
                    <Noisy text={site.name} /> <LinkExternalIcon size={14} />
                  </Link>
                </Heading>
                <Text as="p" className="card-text">
                  <Noisy text={site.description} />
                </Text>
                <Stack direction="horizontal" gap="condensed" wrap="wrap">
                  {site.tags.map((tag) => (
                    <Label key={tag} variant="sponsors">
                      {tag}
                    </Label>
                  ))}
                </Stack>
                <Link href={`${github}/${site.name}`} muted className="card-repo">
                  <RepoIcon size={14} /> tsuji-riya/{site.name}
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="works" className="works-section">
          <Heading as="h2" id="works" variant="medium" className="section-title">
            <span aria-hidden="true">😺</span> <Noisy text="Works" />
          </Heading>
          <ol className="timeline">
            {works.map((work) => (
              <li key={work.title} className="timeline-item">
                <div className="card">
                  <Heading as="h3" variant="small">
                    <span aria-hidden="true">{work.emoji}</span> <Noisy text={work.title} />
                  </Heading>
                  <Stack direction="horizontal" gap="condensed" wrap="wrap">
                    {work.tags.map((tag) => (
                      <Label key={tag} variant="sponsors">
                        {tag}
                      </Label>
                    ))}
                  </Stack>
                  <ul className="repos">
                    {work.repos.map((repo) => (
                      <li key={repo.name}>
                        <Link href={`${github}/${repo.name}`}>
                          <RepoIcon size={14} /> <Noisy text={repo.name} />
                        </Link>
                        <Text as="p" className="card-text">
                          <Noisy text={repo.description} />
                        </Text>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section aria-labelledby="games" className="works-section">
          <Heading as="h2" id="games" variant="medium" className="section-title">
            <span aria-hidden="true">🎮</span> <Noisy text="Favorite Games" />
          </Heading>
          <ul className="games">
            {games.map((game) => (
              <li key={game.name} className="game">
                <span aria-hidden="true">{game.emoji}</span> <Noisy text={game.name} />
              </li>
            ))}
          </ul>
        </section>
      </main>

      <footer className="footer">
        <Text size="small">© riya.work · made with 😺 and 🎀</Text>
      </footer>
    </div>
  )
}
