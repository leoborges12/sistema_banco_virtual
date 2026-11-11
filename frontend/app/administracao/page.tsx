'use client';

import {
  AlertTriangle,
  ArrowLeft,
  CheckCircle2,
  Clock3,
  FilePenLine,
  LayoutDashboard,
  Link2,
  LogOut,
  Megaphone,
  Newspaper,
  Plus,
  Save,
  ShieldCheck,
  Trash2,
  UserRound,
  X,
} from 'lucide-react';
import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';

type PublicationStatus = 'Rascunho' | 'Em revisão' | 'Publicado';

type NewsItem = {
  id: string;
  title: string;
  summary: string;
  content: string;
  category: string;
  status: PublicationStatus;
  responsible: string;
  publishDate: string;
  updatedAt: string;
};

type FormErrors = Partial<Record<'title' | 'summary' | 'content' | 'category' | 'responsible' | 'publishDate', string>>;
type FormSubmitEvent = Parameters<NonNullable<React.ComponentProps<'form'>['onSubmit']>>[0];

const STORAGE_KEY = 'portal-saude-admin-news-v1';

const initialNews: NewsItem[] = [
  {
    id: 'noticia-001',
    title: 'Campanha municipal de vacinação contra a gripe',
    summary: 'Unidades de saúde ampliam os horários de vacinação durante o mês de abril.',
    content: 'A campanha municipal de vacinação estará disponível nas unidades de referência. Consulte os horários e leve um documento de identificação.',
    category: 'Campanhas',
    status: 'Publicado',
    responsible: 'Marina Souza — Comunicação em Saúde',
    publishDate: '2026-04-10',
    updatedAt: '10/04/2026 às 09:30',
  },
  {
    id: 'noticia-002',
    title: 'Orientações para prevenção de doenças respiratórias',
    summary: 'Material reúne cuidados simples para os períodos de maior circulação viral.',
    content: 'O conteúdo apresenta orientações de higiene, ventilação dos ambientes e procura oportuna pelos serviços de saúde.',
    category: 'Prevenção',
    status: 'Em revisão',
    responsible: 'Rafael Lima — Vigilância em Saúde',
    publishDate: '2026-05-02',
    updatedAt: '28/04/2026 às 14:15',
  },
  {
    id: 'noticia-003',
    title: 'Novo horário de atendimento em unidades selecionadas',
    summary: 'Comunicado está sendo preparado para orientar usuários sobre a mudança.',
    content: 'A relação completa de unidades e os novos horários serão incluídos após validação da coordenação responsável.',
    category: 'Comunicados',
    status: 'Rascunho',
    responsible: 'Paula Mendes — Atenção Primária',
    publishDate: '',
    updatedAt: '25/04/2026 às 11:40',
  },
];

const emptyForm: Omit<NewsItem, 'id' | 'updatedAt'> = {
  title: '',
  summary: '',
  content: '',
  category: '',
  status: 'Rascunho',
  responsible: '',
  publishDate: '',
};

function nowLabel() {
  return new Intl.DateTimeFormat('pt-BR', {
    dateStyle: 'short',
    timeStyle: 'short',
  }).format(new Date()).replace(',', ' às');
}

function statusClasses(status: PublicationStatus) {
  if (status === 'Publicado') return 'bg-emerald-50 text-emerald-700 ring-emerald-200';
  if (status === 'Em revisão') return 'bg-amber-50 text-amber-800 ring-amber-200';
  return 'bg-slate-100 text-slate-700 ring-slate-200';
}

export default function AdministrationPage() {
  const [authenticated, setAuthenticated] = useState(false);
  const [loginError, setLoginError] = useState('');
  const [news, setNews] = useState<NewsItem[]>(initialNews);
  const [hydrated, setHydrated] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState(emptyForm);
  const [errors, setErrors] = useState<FormErrors>({});
  const [feedback, setFeedback] = useState('');

  useEffect(() => {
    const loadSavedData = window.setTimeout(() => {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      if (saved) {
        try {
          setNews(JSON.parse(saved) as NewsItem[]);
        } catch {
          window.localStorage.removeItem(STORAGE_KEY);
        }
      }
      setHydrated(true);
    }, 0);
    return () => window.clearTimeout(loadSavedData);
  }, []);

  useEffect(() => {
    if (hydrated) window.localStorage.setItem(STORAGE_KEY, JSON.stringify(news));
  }, [hydrated, news]);

  const totals = useMemo(() => ({
    published: news.filter((item) => item.status === 'Publicado').length,
    review: news.filter((item) => item.status === 'Em revisão').length,
    draft: news.filter((item) => item.status === 'Rascunho').length,
  }), [news]);

  function signIn(event: FormSubmitEvent) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const emailValue = data.get('email');
    const passwordValue = data.get('password');
    const email = typeof emailValue === 'string' ? emailValue.trim() : '';
    const password = typeof passwordValue === 'string' ? passwordValue : '';
    if (!/^\S+@\S+\.\S+$/.test(email) || password.length < 6) {
      setLoginError('Informe um e-mail válido e uma senha demonstrativa com pelo menos 6 caracteres.');
      return;
    }
    setLoginError('');
    setAuthenticated(true);
  }

  function startCreate() {
    setEditingId(null);
    setForm(emptyForm);
    setErrors({});
    setFeedback('');
    setShowForm(true);
  }

  function startEdit(item: NewsItem) {
    setEditingId(item.id);
    setForm({
      title: item.title,
      summary: item.summary,
      content: item.content,
      category: item.category,
      status: item.status,
      responsible: item.responsible,
      publishDate: item.publishDate,
    });
    setErrors({});
    setFeedback('');
    setShowForm(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function validate() {
    const nextErrors: FormErrors = {};
    if (form.title.trim().length < 8) nextErrors.title = 'Informe um título com pelo menos 8 caracteres.';
    if (form.summary.trim().length < 20) nextErrors.summary = 'O resumo deve ter pelo menos 20 caracteres.';
    if (form.content.trim().length < 40) nextErrors.content = 'O conteúdo deve ter pelo menos 40 caracteres.';
    if (!form.category) nextErrors.category = 'Selecione uma categoria.';
    if (form.responsible.trim().length < 5) nextErrors.responsible = 'Identifique o responsável pelo conteúdo.';
    if (form.status === 'Publicado' && !form.publishDate) nextErrors.publishDate = 'A data é obrigatória para publicar.';
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  }

  function saveNews(event: FormSubmitEvent) {
    event.preventDefault();
    if (!validate()) return;
    const timestamp = nowLabel();
    if (editingId) {
      setNews((items) => items.map((item) => item.id === editingId ? { ...item, ...form, updatedAt: timestamp } : item));
      setFeedback('Notícia atualizada e alteração registrada no histórico simulado.');
    } else {
      setNews((items) => [{ ...form, id: `noticia-${Date.now()}`, updatedAt: timestamp }, ...items]);
      setFeedback('Notícia cadastrada e autoria registrada com sucesso.');
    }
    setShowForm(false);
  }

  function deleteNews(item: NewsItem) {
    if (!window.confirm(`Excluir a notícia “${item.title}”? Esta ação afeta somente os dados simulados deste navegador.`)) return;
    setNews((items) => items.filter((newsItem) => newsItem.id !== item.id));
    setFeedback('Notícia excluída dos dados simulados.');
  }

  if (!authenticated) {
    return (
      <main className="min-h-screen bg-[#eef5fa] px-5 py-10 text-navy md:py-16">
        <div className="mx-auto grid max-w-5xl overflow-hidden border border-border bg-white shadow-sm md:grid-cols-[1.05fr_0.95fr]">
          <section className="bg-primary p-8 text-white md:p-12">
            <div className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.16em] text-white/80">
              <ShieldCheck className="h-6 w-6" /> Área administrativa
            </div>
            <h1 className="mt-14 max-w-md text-4xl font-semibold leading-tight md:text-5xl">Gestão de conteúdo do Portal de Saúde</h1>
            <p className="mt-6 max-w-md leading-7 text-white/80">Protótipo funcional para validar o gerenciamento editorial antes da integração com autenticação institucional e banco de dados.</p>
            <div className="mt-10 border-l-4 border-turquoise bg-white/10 p-4 text-sm leading-6">
              <strong className="block text-white">Ambiente de demonstração</strong>
              Nenhum dado ou credencial real é utilizado. As alterações ficam somente neste navegador.
            </div>
          </section>
          <section className="p-8 md:p-12">
            <Link href="/" className="inline-flex items-center gap-2 text-sm font-semibold text-institutional hover:underline"><ArrowLeft className="h-4 w-4" /> Voltar ao portal</Link>
            <div className="mt-14">
              <span className="grid h-12 w-12 place-items-center bg-ice text-institutional"><UserRound className="h-6 w-6" /></span>
              <h2 className="mt-5 text-2xl font-semibold">Acesso demonstrativo</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">Use qualquer e-mail em formato válido e uma senha fictícia de 6 caracteres ou mais.</p>
            </div>
            <form className="mt-8 space-y-5" onSubmit={signIn} noValidate>
              <div>
                <label htmlFor="email" className="text-sm font-semibold">E-mail institucional simulado</label>
                <input id="email" name="email" type="email" placeholder="administrador@exemplo.saude" className="mt-2 w-full border border-input px-3 py-3 outline-none focus:border-turquoise focus:ring-2 focus:ring-turquoise/20" />
              </div>
              <div>
                <label htmlFor="password" className="text-sm font-semibold">Senha demonstrativa</label>
                <input id="password" name="password" type="password" placeholder="Mínimo de 6 caracteres" className="mt-2 w-full border border-input px-3 py-3 outline-none focus:border-turquoise focus:ring-2 focus:ring-turquoise/20" />
              </div>
              {loginError && <p role="alert" className="flex gap-2 bg-red-50 p-3 text-sm text-red-700"><AlertTriangle className="mt-0.5 h-4 w-4 shrink-0" />{loginError}</p>}
              <button type="submit" className="w-full bg-primary px-5 py-3 font-semibold text-white transition-colors hover:bg-navy">Entrar no protótipo</button>
            </form>
          </section>
        </div>
      </main>
    );
  }

  return (
    <div className="min-h-screen bg-[#f3f7fa] text-navy">
      <header className="border-b border-border bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-institutional">Portal de Saúde</p>
            <p className="mt-1 font-semibold">Painel administrativo <span className="ml-2 bg-amber-100 px-2 py-1 text-xs text-amber-800">Protótipo</span></p>
          </div>
          <button onClick={() => setAuthenticated(false)} className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-navy"><LogOut className="h-4 w-4" /> Sair</button>
        </div>
      </header>

      <div className="mx-auto grid max-w-7xl md:grid-cols-[230px_1fr]">
        <aside className="border-r border-border bg-white px-5 py-7 md:min-h-[calc(100vh-73px)]">
          <nav aria-label="Navegação administrativa" className="space-y-2">
            <span className="flex items-center gap-3 bg-ice px-3 py-3 font-semibold text-institutional"><LayoutDashboard className="h-5 w-5" /> Visão geral</span>
            <span className="flex items-center gap-3 border-l-4 border-turquoise px-3 py-3 font-semibold"><Newspaper className="h-5 w-5" /> Notícias</span>
            <span className="flex items-center gap-3 px-3 py-3 text-muted-foreground"><Megaphone className="h-5 w-5" /> Alertas <small className="ml-auto">Etapa 2</small></span>
            <span className="flex items-center gap-3 px-3 py-3 text-muted-foreground"><Link2 className="h-5 w-5" /> Links úteis <small className="ml-auto">Etapa 2</small></span>
          </nav>
          <div className="mt-10 border border-border bg-slate-50 p-4 text-xs leading-5 text-muted-foreground">
            <strong className="block text-navy">Escopo atual: 50%</strong>
            RF12 e base de RF18/RN09. Alertas, destaques e links úteis entram na próxima etapa.
          </div>
        </aside>

        <main className="min-w-0 px-5 py-8 md:px-8 lg:px-10">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-institutional">Gerenciamento editorial</p>
              <h1 className="mt-2 text-3xl font-semibold tracking-tight">Notícias e comunicados</h1>
              <p className="mt-2 text-muted-foreground">Cadastre, revise e publique conteúdos com identificação do responsável.</p>
            </div>
            <button onClick={startCreate} className="inline-flex items-center justify-center gap-2 bg-primary px-5 py-3 font-semibold text-white hover:bg-navy"><Plus className="h-5 w-5" /> Nova notícia</button>
          </div>

          <section className="mt-8 grid gap-4 sm:grid-cols-3" aria-label="Resumo das notícias">
            <div className="border border-border bg-white p-5"><CheckCircle2 className="h-5 w-5 text-emerald-600" /><p className="mt-5 text-3xl font-semibold">{totals.published}</p><p className="mt-1 text-sm text-muted-foreground">Publicadas</p></div>
            <div className="border border-border bg-white p-5"><Clock3 className="h-5 w-5 text-amber-600" /><p className="mt-5 text-3xl font-semibold">{totals.review}</p><p className="mt-1 text-sm text-muted-foreground">Em revisão</p></div>
            <div className="border border-border bg-white p-5"><FilePenLine className="h-5 w-5 text-slate-600" /><p className="mt-5 text-3xl font-semibold">{totals.draft}</p><p className="mt-1 text-sm text-muted-foreground">Rascunhos</p></div>
          </section>

          {showForm && (
            <section className="mt-8 border border-border bg-white" aria-labelledby="news-form-title">
              <div className="flex items-center justify-between border-b border-border px-5 py-4 md:px-7">
                <div><p className="text-xs font-bold uppercase tracking-[0.14em] text-institutional">Formulário editorial</p><h2 id="news-form-title" className="mt-1 text-xl font-semibold">{editingId ? 'Editar notícia' : 'Cadastrar notícia'}</h2></div>
                <button onClick={() => setShowForm(false)} aria-label="Fechar formulário" className="p-2 text-muted-foreground hover:text-navy"><X className="h-5 w-5" /></button>
              </div>
              <form onSubmit={saveNews} noValidate className="grid gap-6 p-5 md:grid-cols-2 md:p-7">
                <Field label="Título" error={errors.title} className="md:col-span-2">
                  <input value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} className="admin-input" aria-invalid={Boolean(errors.title)} />
                </Field>
                <Field label="Resumo" error={errors.summary} className="md:col-span-2">
                  <textarea value={form.summary} onChange={(e) => setForm({ ...form, summary: e.target.value })} rows={3} className="admin-input resize-y" aria-invalid={Boolean(errors.summary)} />
                </Field>
                <Field label="Conteúdo" error={errors.content} className="md:col-span-2">
                  <textarea value={form.content} onChange={(e) => setForm({ ...form, content: e.target.value })} rows={6} className="admin-input resize-y" aria-invalid={Boolean(errors.content)} />
                </Field>
                <Field label="Categoria" error={errors.category}>
                  <select value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })} className="admin-input" aria-invalid={Boolean(errors.category)}><option value="">Selecione</option><option>Campanhas</option><option>Comunicados</option><option>Prevenção</option><option>Serviços</option></select>
                </Field>
                <Field label="Responsável pelo conteúdo" error={errors.responsible}>
                  <input value={form.responsible} onChange={(e) => setForm({ ...form, responsible: e.target.value })} placeholder="Nome — setor" className="admin-input" aria-invalid={Boolean(errors.responsible)} />
                </Field>
                <Field label="Etapa de publicação">
                  <select value={form.status} onChange={(e) => setForm({ ...form, status: e.target.value as PublicationStatus })} className="admin-input"><option>Rascunho</option><option>Em revisão</option><option>Publicado</option></select>
                </Field>
                <Field label="Data de publicação" error={errors.publishDate}>
                  <input type="date" value={form.publishDate} onChange={(e) => setForm({ ...form, publishDate: e.target.value })} className="admin-input" aria-invalid={Boolean(errors.publishDate)} />
                </Field>
                <div className="flex flex-wrap justify-end gap-3 border-t border-border pt-5 md:col-span-2">
                  <button type="button" onClick={() => setShowForm(false)} className="border border-input px-5 py-2.5 font-semibold hover:bg-slate-50">Cancelar</button>
                  <button type="submit" className="inline-flex items-center gap-2 bg-primary px-5 py-2.5 font-semibold text-white hover:bg-navy"><Save className="h-4 w-4" /> Salvar conteúdo</button>
                </div>
              </form>
            </section>
          )}

          {feedback && <output className="mt-6 flex items-center gap-2 border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-800"><CheckCircle2 className="h-5 w-5" />{feedback}</output>}

          <section className="mt-8 overflow-hidden border border-border bg-white" aria-labelledby="content-list-title">
            <div className="border-b border-border px-5 py-4 md:px-7"><h2 id="content-list-title" className="text-xl font-semibold">Conteúdos cadastrados</h2><p className="mt-1 text-sm text-muted-foreground">Dados simulados salvos localmente neste navegador.</p></div>
            <div className="divide-y divide-border">
              {news.map((item) => (
                <article key={item.id} className="grid gap-4 px-5 py-5 md:grid-cols-[1fr_auto] md:items-center md:px-7">
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-2"><span className={`rounded-full px-2.5 py-1 text-xs font-semibold ring-1 ${statusClasses(item.status)}`}>{item.status}</span><span className="text-xs text-muted-foreground">{item.category}</span></div>
                    <h3 className="mt-3 text-lg font-semibold">{item.title}</h3>
                    <p className="mt-1 line-clamp-2 text-sm leading-6 text-muted-foreground">{item.summary}</p>
                    <p className="mt-3 text-xs text-muted-foreground"><strong className="text-navy">Responsável:</strong> {item.responsible} · Atualizado em {item.updatedAt}</p>
                  </div>
                  <div className="flex gap-2">
                    <button onClick={() => startEdit(item)} className="inline-flex items-center gap-2 border border-input px-3 py-2 text-sm font-semibold hover:bg-ice"><FilePenLine className="h-4 w-4" /> Editar</button>
                    <button onClick={() => deleteNews(item)} className="inline-flex items-center gap-2 border border-red-200 px-3 py-2 text-sm font-semibold text-red-700 hover:bg-red-50"><Trash2 className="h-4 w-4" /> Excluir</button>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

function Field({ label, error, className = '', children }: { label: string; error?: string; className?: string; children: React.ReactNode }) {
  return (
    <label className={`block text-sm font-semibold ${className}`}>
      {label}
      <span className="mt-2 block">{children}</span>
      {error && <span className="mt-2 flex items-center gap-1 text-xs font-normal text-red-700"><AlertTriangle className="h-3.5 w-3.5" />{error}</span>}
    </label>
  );
}
