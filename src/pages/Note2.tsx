import React from 'react';
import { Box, Container, CssBaseline, Typography, Paper, Button, Grid } from '@mui/material';
import { Helmet } from 'react-helmet';
import { styles } from '../styles/NoteStyles';
import MenuBar from '../components/Menu';
import { Link } from 'react-router-dom';
import { useLanguage } from '../components/language';

const Note1 = () => {

  const { language, setLanguage, t } = useLanguage();
  
  const content: Record<'Eng' | 'Farsi' | 'Fr', { title: string; description: string; body: string }> = {
    Eng: {
      title: 'Purify Your Soul',
      description:
        'Read a brief note Tazhib art and two mythological stories.',
      body: `
                    <br />
                    <br />
                    I have always had this question: why the decoration of mosques and revered architectural structures is designed with Tazhib art? and why the name 'Tazhib'? Just so you know, the name Tazhib means migration and purification. There is no question that these artworks are beautiful and magnificent.
                    But the question becomes clear when you know that art has its roots in the Sun. The sun is the source of light and purification. Most poets, mythologists, and novelists, symbolize the Sun as the source of purity,
                    which sheds light on darkness. The terminology also makes sense as mentioned that the name Tazhib means purification. That's why the art is also named Shamseh meaning "the sun". And that is why artists decorate
                    their artwork with gold, a symbol of purity.
                    <br />
                    <br />
                    The same concept is true in literature, especially in mythologies. Almost all mythologies throughout history depict a war scene between the two forces of good and evil. 
                    Although they appear as characters in each story, the fact is, they exist inside us. The true war is between the darkness and the pure, innocent side inside all of us. So, the naming convention of this art, makes sense when you think of 'migration' and 'purification'.
                    <br />
                    <br />
                    The Phantom of the Opera, the novel by Gaston Leroux (1909), shows this profoundly. The Phantom (Erik) symbolizes the darker, more hidden aspects of the psyche, while Christine Daaé represents light, 
                    purity, and the potential for redemption. Erik, a tortured artist seeking both love and control, reflects the internal struggle between the shadow self and love. He has the ugliest face, which is why he wears a mask 
                    that symbolizes the ego's attempt to hide the true dark self. Christine, on the other hand, also faces the battle
                    between these two forces: one in the form of the Phantom with an overwhelming passion and deceit, and Raoul's gentle, pure love. The Phantom of the Opera is a metaphor for this internal battle that exists within all of us.
                    <br />
                    <br />
                    <img style="width: 100%; max-width: 500px; display: block; margin: 0 auto;" alt="The Phantom Mask" src = "/Mask 2.webp"/>
                    <br />
                    <br />
                    Shahnameh, the great Persian mythology, poet, and history book by Ferdowsi, represents this battle between light (purity and innocence) and darkness (temptation and corruption). The story of Siyavash is one of these great allegories. 
                    The story begins with a lonely woman, Siyavash's mother, being lost in the landscape. Two knights confront her and take her to the king's palace, where the king falls in love 
                    with her. The role of luck here is a key point. We cannot predict, pre-organize, or pre-orchestrate our lives at early stages of any movement or migration. Our existence and sometimes the environment we live in, are shaped based on random events. Then, it's our turn to play our role in life, 
                    commit to our pure self, and change the environment.
                    <br />
                    Siyavash grows from a pure child in exile, into a wise, honorable, and strong knight. 
                    When he returns to the king, he confronts his darker self represented by Sudabeh, the queen of Iran, who tempts him 
                    with a destructive power, lust, and deceit. He refuses her, showing a great commitment to morality. Sudabeh, when rejected, becomes vengeful and falsely accuses Siyavash of betraying his father, the king, Kay Kavus. The king, ultimately, 
                    orders a fire trial for Siyavash. The fire trial is one of the most significant moments in Siyavash’s story, where he proves his innocence and purity in the face of false accusations. 
                    The fire itself can be seen as a symbol of purification, much like gold being purified by fire.
                    <br />
                    <br />
                    <img style="width: 100%; max-width: 500px; display: block; margin: 0 auto;" alt="Siyavash Fire Trial" src = "/Siyavash.webp"/>
                    <br />
                    <br />
                    This relationship between art, mythologies, and literature has always been interesting to me. Tazhib and Shamseh are artistic ways of showing greatness and purity, 
                    while mythology and symbolic storytelling also represent the same themes. Phantom of the Opera, Siyavash, Sudabeh, these characters symbolize aspects within us. They symbolize the ongoing internal battle to grow toward greatness.
      `,
    },
    Farsi: {
      title: 'هنر تذهیب',
      description: 'یادداشتی کوتاه درباره هنر تذهیب و دو داستان اسطوره‌ای بخوانید',
      body: `
      <br />
      <br />
      همیشه این سؤال را داشته‌ام: چرا تزئین مساجد و معماری ساختمان های مقدس و تاریخی با هنر تذهیب طراحی می‌شود؟ و اساسا چرا این نام، "تذهیب"، برای این هنر انتخاب شده است؟ تذهیب به معنای "زر اندود کردن"، "پاکی" است. بدون شک این آثار هنری زیبا و باشکوه هستند. اما این پرسش زمانی روشن‌تر می‌شود که بدانیم این هنر ریشه در خورشید دارد. خورشید منبع نور و پاکی است. بیشتر شاعران، اسطوره‌شناسان، و نویسندگان، خورشید را نماد پاکی می‌دانند که بر تاریکی نور می‌افکند.  به همین دلیل این هنر "شمسه" نیز نامیده می‌شود. درواقع شمسه یکی از اشکال هنر تذهیب است. از نظر اصطلاح‌شناسی نیز، همان‌طور که اشاره شد، نام تذهیب به معنای پاک‌سازی است. و به همین دلیل هنرمندان آثار خود را با طلا تزئین می‌کنند، که نماد پاکی است.
      <br />
      <br />
همین مفهوم در ادبیات، به ویژه در اسطوره‌شناسی نیز صدق می‌کند. تقریباً تمام حماسه ها و اسطوره‌های ابدی در طول تاریخ، صحنه‌ای از جنگ میان دو نیروی خیر و شر را به تصویر می‌کشند. اگرچه این نیروها در هر داستان به صورت شخصیت‌های داستانی ظاهر می‌شوند، حقیقت این است که آن‌ها جنبه های مختلف درونی انسان را تشبیه میکنند. جنگ واقعی بین تاریکی و بخش پاک و معصوم درون همه ما رخ می‌دهد. بنابراین، نام‌گذاری این هنر معنا پیدا می‌کند وقتی به مفهوم "هجرت" و "پاک‌سازی" فکر کنید.
      <br />
      <br />
رمان "شبح اپرا" اثر گاستون لورو (۱۹۰۹) این موضوع را عمیقاً نشان می‌دهد. "فانتوم" یا شبح (اریک) نماد جنبه‌های تاریک‌تر و مخفی‌تر روان است، در حالی که کریستین دائه نماینده نور، پاکی، و رستگاری است. اریک، هنرمندی شکنجه‌دیده که هم به دنبال عشق و هم کنترلگری است، بازتابی از مبارزه درونی بین خود تاریک و خود پاک است. اریک چهره‌ای بسیار کریه زشت دارد و به همین دلیل ماسکی بر چهره می‌گذارد که نماد تلاش نفس برای پنهان کردن آن جنبه ی درونی است. از سوی دیگر، کریستین نیز با این دو نیرو مبارزه می‌کند: اریک و رائول، یکی به شکل شبح که با اشتیاق و فریب‌کاری فراگیر، و دیگری عشق ملایم و پاک با کریستین روبه رو میشنود. "شبح اپرا" داستانی نمادین و استعاره‌ای از این نبرد درونی است که درون همه ما وجود دارد.
      <br />
      <br />
      <img style="width: 100%; max-width: 500px; display: block; margin: 0 auto;" alt="The Phantom Mask" src = "/Mask 2.webp"/>
      <br />
      <br />
شاهنامه، کتاب شعر حماسی، اسطوره‌شناسی، و تاریخ فارسی اثر فردوسی، این نبرد میان نور (پاکی و معصومیت) و تاریکی (وسوسه و فساد) را به تصویر می‌کشد. داستان سیاوش یکی از بهترین های این تمثیل‌ است. داستان با زنی تنها، مادر سیاوش، که در دشتی گمشده است آغاز می‌شود. دو شوالیه با او روبرو شده و او را به قصر پادشاه می‌برند، جایی که پادشاه عاشق او می‌شود. نقش شانس در اینجا نکته کلیدی است. ما نمی‌توانیم در مراحل اولیه هر حرکت یا تغییری، زندگی خود را پیش‌بینی یا پیش‌سازماندهی کنیم. وجود ما و گاه محیطی که در آن زندگی می‌کنیم، بر اساس رویدادهای تصادفی شکل می‌گیرد. سپس نوبت ماست که نقش خود را در زندگی ایفا کنیم، به خود پاک متعهد شویم و محیط را تغییر دهیم.
      <br />
      <br />
سیاوش از کودکی پاک در تبعید، به شوالیه‌ای خردمند، شرافتمند و قوی تبدیل می‌شود. هنگامی که به نزد پادشاه بازمی‌گردد، با وسوسه های سودابه، ملکه ایران، روبرو می‌شود. سودابه او را با قدرتی مخرب، شهوت و فریب وسوسه می‌کند. او حیله های سودابه را رد کرده و تعهد بزرگی به اخلاق نشان می‌دهد. در مقابل، سودابه انتقام‌جو می‌شود و به دروغ سیاوش را به خیانت به پدرش، شاه کیکاووس، متهم می‌کند. پادشاه سرانجام دستور می‌دهد که سیاوش به آزمون آتش سپرده شود. کیکاووس در شاهنامه به صورت پادشاهی پاک سیرت ولی ساده لوح و ضعیف در امر قضاوت توصیف شده که همین نکته سبب تبعید دوباره و مرگ غم انگیز شیاوش میشود. آزمون آتش یکی از مهم‌ترین لحظات داستان سیاوش است، جایی که او بی‌گناهی و پاکی خود را در برابر اتهامات نادرست ثابت می‌کند. خود آتش می‌تواند به عنوان نمادی از پاک‌سازی دیده شود، همانند طلا که با آتش خالص سازی می‌شود. جالب است بدانیم کلمه ی ذهب در زبان عربی به معنی طلا میباشد.
      <br />
      <br />
      <img style="width: 100%; max-width: 500px; display: block; margin: 0 auto;" alt="Siyavash Fire Trial" src = "/Siyavash.webp"/>
      <br />
      <br />
این رابطه میان هنر، اسطوره‌شناسی و ادبیات همیشه برای من جالب بوده است. تذهیب و شمسه، روش‌های هنری برای نمایش عظمت و پاکی هستند، در حالی که اسطوره‌شناسی و داستان‌سرایی نمادین نیز همین مفاهیم را نمایندگی می‌کنند. شبح اپرا، سیاوش، سودابه، این شخصیت‌ها جنبه‌هایی از درون ما را نمادسازی می‌کنند. آن‌ها نماد نبرد درونی مداوم برای رشد به سوی عظمت هستند.
      `,
    },
    Fr: {
      title: "Purifie ton âme",
      description: "Lisez une brève note sur l'art du Tazhib et deux histoires mythologiques",
      body: `
      <br />
      <br />
      J’ai toujours eu cette question : pourquoi la décoration des mosquées et des structures architecturales sacrées est-elle conçue avec l’art du Tazhib ? Et pourquoi ce nom, « Tazhib » ? Sachez que le mot « Tazhib » signifie migration et purification. Il ne fait aucun doute que ces œuvres d’art sont belles et magnifiques. Mais la question devient plus claire lorsque vous savez que l’art tire ses racines du soleil. Le soleil est la source de lumière et de purification. La plupart des poètes, mythologues et romanciers symbolisent le soleil comme une source de pureté, qui éclaire les ténèbres. L’étymologie est également logique, car comme mentionné, le nom Tazhib signifie purification. C’est pourquoi cet art est aussi appelé « Shamseh », ce qui signifie « le soleil ». Et c’est pour cela que les artistes décorent leurs œuvres avec de l’or, symbole de pureté.
      <br />
      <br />
Le même concept est vrai en littérature, en particulier dans la mythologie. Presque toutes les mythologies de l’histoire décrivent une scène de guerre entre deux forces : le bien et le mal. Bien que ces forces apparaissent sous forme de personnages dans chaque histoire, la vérité est qu’elles existent en nous. La véritable guerre se déroule entre les ténèbres et le côté pur et innocent en chacun de nous. Ainsi, la dénomination de cet art prend tout son sens lorsque l’on pense à la « migration » et à la « purification ».
      <br />
      <br />
Le Fantôme de l’Opéra, le roman de Gaston Leroux (1909), illustre cela de manière profonde. Le Fantôme (Erik) symbolise les aspects les plus sombres et cachés de la psyché, tandis que Christine Daaé représente la lumière, la pureté et le potentiel de rédemption. Erik, un artiste torturé en quête d’amour et de contrôle, reflète la lutte intérieure entre le moi obscur et l’amour. Il porte un masque pour cacher son visage monstrueux, ce qui symbolise l’effort de l’ego pour dissimuler la véritable obscurité intérieure. Christine, quant à elle, affronte aussi ce combat entre ces deux forces : l’une sous la forme du Fantôme avec sa passion dévorante et sa tromperie, et l’autre sous la forme de l’amour doux et pur de Raoul. Le Fantôme de l’Opéra est une métaphore de ce combat intérieur qui existe en chacun de nous.
      <br />
      <br />
      <img style="width: 100%; max-width: 500px; display: block; margin: 0 auto;" alt="The Phantom Mask" src = "/Mask 2.webp"/>
      <br />
      <br />
Le Shahnameh, le grand livre de mythologie, de poésie et d’histoire persane écrit par Ferdowsi, représente cette lutte entre la lumière (pureté et innocence) et les ténèbres (tentation et corruption). L’histoire de Siyavash est l’une de ces grandes allégories. L’histoire commence avec une femme solitaire, la mère de Siyavash, perdue dans un paysage. Deux chevaliers la rencontrent et l’emmènent au palais du roi, où le roi tombe amoureux d’elle. Le rôle du hasard ici est un point clé. Nous ne pouvons pas prévoir, organiser ou orchestrer notre vie au début de tout mouvement ou migration. Notre existence et parfois l’environnement dans lequel nous vivons sont façonnés par des événements aléatoires. Ensuite, c’est à nous de jouer notre rôle dans la vie, de nous engager envers notre moi pur et de changer notre environnement.
      <br />
      <br />
Siyavash grandit, passant d’un enfant pur en exil à un chevalier sage, honorable et fort. Lorsqu’il revient auprès du roi, il affronte son côté sombre, représenté par Sudabeh, la reine d’Iran, qui le tente avec un pouvoir destructeur, la luxure et la tromperie. Il refuse ses avances, démontrant un grand engagement envers la moralité. Sudabeh, vexée par ce rejet, devient vengeresse et accuse faussement Siyavash de trahison envers son père, le roi Kay Kavus. Finalement, le roi ordonne une épreuve de feu pour Siyavash. L’épreuve de feu est l’un des moments les plus significatifs de l’histoire de Siyavash, où il prouve son innocence et sa pureté face à des accusations mensongères. Le feu lui-même peut être vu comme un symbole de purification, tout comme l’or est purifié par le feu.
      <br />
      <br />
      <img style="width: 100%; max-width: 500px; display: block; margin: 0 auto;" alt="Siyavash Fire Trial" src = "/Siyavash.webp"/>  
      <br />
      <br />
Cette relation entre l’art, la mythologie et la littérature m’a toujours fasciné. Le Tazhib et le Shamseh sont des façons artistiques de représenter la grandeur et la pureté, tandis que la mythologie et les récits symboliques incarnent également ces thèmes. Le Fantôme de l’Opéra, Siyavash, Sudabeh : ces personnages symbolisent des aspects de notre être. Ils représentent le combat intérieur constant pour évoluer vers la grandeur.
      `,
    },
  };

  const selectedContent = content[language as 'Eng' | 'Farsi' | 'Fr'];
  return (
    <>
      <Helmet>
        <html lang={language.toLowerCase()} />
        <title>{selectedContent.title}</title>
        <meta name="description" content={selectedContent.description} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            name: "Purify Your Soul",
            url: "https://codeandverse.info/purify-your-soul",
            author: {
            "@type": "Person",
            name: "Saeed Jamali Fashi"
            },
            dateCreated: "2024-12-12",
            description: "Read a brief note Tazhib art and two mythological stories.",
            mainEntityOfPage: {
              "@type": "WebPage",
              name: "Purify Your Soul",
              url: "https://codeandverse.info/purify-your-soul"
            }      
          })}
        </script>
      </Helmet>

      <CssBaseline />

      <Box sx={styles.root}>
        <MenuBar />
        
        <Container maxWidth="md" sx={styles.container}>
          {/* Page Title */}
          <Typography variant="h2" 
            sx={{
            ...styles.title,
            fontFamily: language === 'Farsi' ? 'B Nazanin, sans-serif' : 'Poppins, sans-serif'
            }}>
            {selectedContent.title}
          </Typography>

          {/* Content Section */}
          <Paper sx={styles.contentPaper}>
                <Typography variant="body1" 
                                  sx={{
                                    ...styles.text,
                                    direction: language === 'Farsi' ? 'rtl' : 'ltr',
                                    fontFamily: language === 'Farsi' ? 'B Nazanin, sans-serif' : 'Poppins, sans-serif',
                                  }}>
                    <Box component="img" sx={styles.image3} alt="The Phantom Mask" src = "/Shah Mosque 2.webp"/>
                    <div dangerouslySetInnerHTML={{ __html: selectedContent.body }} />
                </Typography>
          </Paper>


          <Grid container spacing={3} sx={styles.callToAction}>
              <Grid item>
                    <Link to="/notes">
                        <Button variant="outlined" color="primary" sx={styles.button}>
                            Back to Notes
                        </Button>
                    </Link>
              </Grid>
          </Grid>
        </Container>

        <Box sx={styles.footer}>
            <Typography variant="body2">
                Image source: <a href="https://www.cloudynights.com/topic/917829-total-solar-eclipse-2024-images/" target="_blank" rel="noopener noreferrer" style={{ color: '#d3d3d3' }}>cloudynights.com</a>
            </Typography>
        </Box>
      </Box>
    </>
  );
};

export default Note1;
