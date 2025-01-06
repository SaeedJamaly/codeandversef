import React, { useEffect, useState } from 'react';
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
      title: 'The Father of Algebra',
      description:
        'Read a brief note on Khwarizmi, the father of algebra.',
      body: `
                  Muhammad ibn Musa Khwarizmi was a Persian mathematician, astronomer, and geographer
                  of the 8th century. He is best known for his groundbreaking work in mathematics,
                  particularly for writing the book *Al-Jabr* or English name *The Compendious Book on Calculation by Completion and Balancing*,
                  which is the source of the term "algebra" and "Algorithm".
                  <br />
                  <br />
                  His work laid the foundation for solving linear and quadratic equations and contributed significantly to the development of mathematics in both
                  the Islamic world and later to Europe. Khwarizmi's contributions were essential in advancing
                  the field of algebra and mathematics as a whole.
                  <br />
                  <br />
                  Here is an assumption: During the first one thousand years of Christianity, religion was against the use of signs
                  other than the signs that had already been used by the church. Islam was more restricted in that regard. Algebra is a branch of mathematics
                  in which the use of signs instead of numbers and as variables is widely common. This can be a reason that the church and religion in general was opposing
                  Algebra. Khwarizmi, somehow legalized the use of signs and variables in math. He basically addressed some real-world questions in Islam.
                  Like the problem of assets and capital vs debt. He defined a problem of how to calculate the net inheritance after debts are settled and determine the share of each heir according to their legal entitlement.
                  <br />
                  <br />
                  Khwarizmi's influence on European mathematics cannot be overstated. His works were translated into Latin during the 12th century, which led to the dissemination 
                  of his ideas across Europe. The Latin translation of Al-Kitab al-Mukhtasar became a key text for European scholars, contributing significantly to the development of 
                  algebra in the Western world. By the 15th century, the term "algebra" had become widely used in European mathematical texts, reflecting the widespread impact of Khwarizmi's 
                  work. His systematic approach to solving linear and quadratic equations helped bridge the gap between ancient Greek mathematics and later developments in the Renaissance, where algebra 
                  evolved further. 
                  <br />
                  <br />
                  One of the most famous English translations of Khwarizmi's work is The Compendious Book on Calculation by Completion and Balancing, translated by Frederic Rosen in 1831. 
                  This translation made Khwarizmi's influential work more accessible to Western audiences and played a crucial role in the 19th-century revival of interest in Islamic mathematics. 
                  Rosen’s translation was instrumental in introducing algebraic methods to a broader audience, contributing to the integration of Islamic mathematical heritage into the history of Western 
                  science and mathematics.
                  <br />
                  <br />
                  The 20th-century mathematician, historian and philosopher of science, Roshdi Rashed, has made significant contributions to the study of Khwarizmi's work. His book "Al-Khwarizmi: The Beginnings of Algebra" 
                  or "Al-Khwarizmi: Les débuts de l'algèbre" in French is a comprehensive study of al-Khwarizmi’s contributions to the field of mathematics, particularly focusing on the foundational role he played in the development of algebra.
                  Rashed's research focuses on the historical context and intellectual impact of Khwarizmi, shedding light on how his ideas were transmitted to both the Islamic world and the West. 
                  His work emphasizes the importance of Khwarizmi’s contributions to the development of mathematical thought and their long-lasting influence on both Eastern and Western traditions. 
                  Rashed's scholarship has played a pivotal role in revitalizing the study of science and mathematics, helping to ensure that figures like Khwarizmi receive the recognition they deserve 
                  for their monumental achievements.
                  <br />
                  <br />
                  Muhammad ibn Musa Khwarizmi’s contributions to mathematics were not only groundbreaking for his time but also had a profound influence on the development of modern mathematical concepts, 
                  including algebra and algorithms. His work provided the foundation for solving linear and quadratic equations, and his innovations in the use of signs and variables in mathematics paved the way for future advancements in both Iran (Persia), its region and Europe. 
                  The legacy of Khwarizmi continues to shape the world of mathematics, and his influence is still felt today in the fields of computer science, artificial intelligence, and beyond.
      `,
    },
    Farsi: {
      title: 'پدر جبر',
      description: 'یادداشتی کوتاه درباره خوارزمی، پدر جبر.',
      body: `
      محمد بن موسی خوارزمی ریاضیدان، ستاره‌شناس و جغرافی‌دان ایرانی در قرن هشتم میلادی بود. 
      او بیشتر به خاطر کارهای پیشگامانه‌اش در ریاضیات شناخته می‌شود، به‌ویژه نوشتن کتاب "کتاب المختصر فی حساب الجبر و المقابله"، 
      که نام کتاب و نام خود خوارزمی منبع واژه‌های "جبر" و "الگوریتم" است.
      <br />
      <br />
      کارهای او پایه‌گذار جبر و حل معادلات خطی و درجه دو بود و نقش بسزایی در توسعه ریاضیات در ایران و بعداً در اروپا ایفا کرد. 
      سهم خوارزمی در پیشرفت علم جبر و ریاضیات به طور کلی بسیار مهم بود.
      <br />
      <br />
      در هزار سال اول مسیحیت، دین مخالف استفاده از علائم و نشانه ها بود، غیر از علائمی که توسط کلیسا استفاده می شد. 
      اسلام در این مورد محدودتر بود. جبر شاخه‌ای از ریاضیات است که در آن استفاده از علائم به‌جای اعداد و به‌عنوان متغیرها بسیار رایج است. 
      احتمالا این می‌تواند دلیلی باشد که کلیسا و دین به طور کلی مخالف جبر بودند. خوارزمی به نوعی استفاده از علائم و متغیرها را در ریاضیات رایج کرد. 
      او اساساً به مسائل دنیای واقعی در اسلام پرداخته بود. 
      مانند مسئله عین و دین، که مساله ی دارایی‌ها و سرمایه در مقابل بدهی هاست. او این مسئله‌ ی چگونگی محاسبه ارث خالص پس از تسویه بدهی‌ها و تعیین سهم هر وارث بر اساس حق قانونی آنها تعریف کرد و با استفاده از معادلات درجه یک و درجه دو حل کرد.
      <br />
      <br />
      تأثیر خوارزمی بر ریاضیات اروپایی را نمی‌توان دست کم گرفت. آثار او در قرن دوازدهم به لاتین ترجمه شد و این امر باعث انتشار 
      ایده‌های او در سراسر اروپا شد. ترجمه لاتین "کتاب المختصر فی حساب الجبر و المقابله" به یک متن کلیدی برای دانشمندان اروپایی تبدیل شد و نقش مهمی در توسعه جبر در غرب داشت. 
      تا قرن پانزدهم، واژه "جبر" به طور گسترده‌ای در متون ریاضی اروپایی استفاده می‌شد و این تأثیر گسترده کار خوارزمی را نشان می‌دهد. 
      رویکرد سیستماتیک او در حل معادلات خطی و درجه دو به پر کردن شکاف بین ریاضیات یونان باستان و پیشرفت‌های بعدی در دوران رنسانس کمک کرد که در آن جبر 
      بیشتر تکامل یافت. 
      <br />
      <br />
      یکی از مشهورترین ترجمه‌های انگلیسی این کتاب است که در سال 1831 توسط فردریک روزن ترجمه شد. 
      این ترجمه کار تأثیرگذار خوارزمی را برای مخاطبان غربی قابل دسترس‌تر کرد و نقش مهمی در احیای علاقه‌مندی به ریاضیات ایرانی در قرن نوزدهم داشت. 
      ترجمه روزن نقش مهمی در معرفی روش‌های جبر به مخاطبان وسیع‌تر ایفا کرد و به ادغام میراث ریاضیات ایرانی در تاریخ علم و ریاضیات غربی کمک کرد.
      <br />
      <br />
      ریاضیدان، مورخ و فیلسوف مصری قرن بیستم، رشدی راشد، به مطالعات کار خوارزمی کمک‌های زیادی کرده است. کتاب او "خوارزمی: آغازهای جبر" 
      یا "الخوارزمی: Les débuts de l'algèbre" به زبان فرانسوی، یک مطالعه جامع از مشارکت‌های خوارزمی در زمینه ریاضیات است که به‌ویژه بر نقش اساسی او در توسعه جبر تأکید دارد.
      پژوهش‌های رشدی بر زمینه تاریخی و تأثیر فکری خوارزمی متمرکز است و روشن می‌کند که چگونه ایده‌های او به جهان اسلام و غرب منتقل شد. 
       کار او بر اهمیت نقش خوارزمی در توسعه تفکر ریاضی و تأثیرات بلندمدت آن بر سنت‌های شرقی و غربی تأکید دارد. 
      مطالعات او همچنین نقش محوری در احیای تحقیقات علمی و ریاضیات ایفا کرده و به شناخت شخصیت‌هایی مانند خوارزمی و خیام کمک شایانی کرده است.
      <br />
      <br />
      مشارکت‌های محمد بن موسی خوارزمی در ریاضیات تنها برای زمان خود پیشگامانه نبود، بلکه تأثیر عمیقی بر توسعه مفاهیم مدرن ریاضی از جمله 
      الگوریتم‌ها داشت. کار او پایه‌گذار حل معادلات خطی و درجه دو بود و نوآوری‌های او در استفاده از علائم و متغیرها در ریاضیات راه را برای پیشرفت‌های آینده در ایران، منطقه و اروپا هموار کرد. 
      میراث خوارزمی همچنان دنیای ریاضیات را شکل می‌دهد و تأثیر او هنوز هم در حوزه‌های علوم کامپیوتر، هوش مصنوعی و دیگر زمینه‌ها احساس می‌شود.
      `,
    },
    Fr: {
      title: "Le Père de l'Algèbre",
      description: "Lisez une brève note sur Khwarizmi, le père de l'algèbre.",
      body: `Muhammad ibn Musa Khwarizmi était un mathématicien, astronome et géographe persan du 8ème siècle. 
            Il est surtout connu pour ses travaux révolutionnaires en mathématiques, en particulier pour avoir écrit le livre *Al-Jabr*, 
            source des termes "algèbre" et "algorithme".`,
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
            '@context': 'https://schema.org',
            '@type': 'Article',
            name: selectedContent.title,
            description: selectedContent.description,
            dateCreated: '2024-12-12',
            mainEntityOfPage: {
              '@type': 'WebPage',
              name: selectedContent.title,
              url: window.location.href,
            },
            author: {
              '@type': 'Person',
              name: 'Saeed Jamali Fashi',
            },
          })}
        </script>
      </Helmet>

      <CssBaseline />

      <Box sx={styles.root}>
        <MenuBar />
        
        <Container maxWidth="md" sx={styles.container}>
          {/* Page Title */}
          <Typography 
            variant="h2" 
            sx={{
              ...styles.title,
              fontFamily: language === 'Farsi' ? 'B Nazanin, sans-serif' : 'Poppins, sans-serif',
              }}>
            {selectedContent.title}
          </Typography>

          {/* Content Section */}
          <Paper sx={styles.contentPaper}>
            <Grid container spacing={3} alignItems="flex-start">
              {/* Image Section */}
              <Grid item xs={12} md={4} sx={{ textAlign: { xs: 'center', md: 'left' } }}>
                <Box
                  component="img"
                  sx={styles.image}
                  alt="Khwarizmi the great mathematician."
                  src="/Khwarizmi 2.webp"
                />
              </Grid>

              {/* Text Section */}
              <Grid item xs={12} md={8}>
                <Typography 
                  variant="body1" 
                  sx={{
                    ...styles.text,
                    direction: language === 'Farsi' ? 'rtl' : 'ltr',
                    fontFamily: language === 'Farsi' ? 'B Nazanin, sans-serif' : 'Poppins, sans-serif',
                  }}>
                  <div dangerouslySetInnerHTML={{ __html: selectedContent.body }} />
                </Typography>
              </Grid>
            </Grid>
          </Paper>


          <Grid container spacing={3} sx={styles.callToAction}>
              <Grid item>
                    <Link to="/notes">
                        <Button variant="outlined" color="primary" sx={styles.button}>
                          {t('Notes')}
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
