import { motion } from "framer-motion";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";

const images = [
  { 
    src: gallery1, 
    alt: "Custom 3D French tip ombre nails with pearl bead accents" 
  },
  { 
    src: gallery2, 
    alt: "Blue and pink nail design with a glossy, modern finish" 
  },
  { 
    src: gallery3, 
    alt: "Heart-shaped nail design with sparkling star details" 
  },
  { 
    src: gallery4, 
    alt: "Classic nail design with a clean and elegant finish" 
  },
  { 
    src: gallery5, 
    alt: "White nails with nature-inspired grass design" 
  },
  { 
    src: gallery6, 
    alt: "Star-themed nail design with detailed dot accents" 
  },
];


const videos = [
  {
    "title": "Gel Extension Application 💅",
    "description": "Beautiful gel extensions in a snap! 🌸 Quick and stunning spring vibes!",
    "url": "https://youtube.com/embed/7UDZzavnISs"
  },
  {
    "title": "Flower Nail Art 🌺",
    "description": "Pretty nails with happy hearts! 💖 How cute is this set? Perfect for springtime! 🌷",
    "url": "https://youtube.com/embed/vfiFRdxnTGI"
  },
  {
    "title": "Nail Art Compilation 🎨",
    "description": "Missed set from early November 🍁 – get inspired with this gorgeous nail art collection!",
    "url": "https://youtube.com/embed/lMsGf3qmDtM"
  },
  {
    "title": "Gel Extension with Butterfly Art 🦋",
    "description": "Stunning butterfly set 🐾 Absolute love for this sweet and simple design! Perfect for any occasion ✨",
    "url": "https://youtube.com/embed/r367qlkAjBg"
  },
  {
    "title": "Christmas Nails 🎄",
    "description": "Tis the season to sparkle, babes! ✨ First Christmas set of the year – festive and fun! ❄️",
    "url": "https://youtube.com/embed/HWXNPoSKvwo"
  },
  {
    "title": "Formal Nails Elegance 💎",
    "description": "My favorite formal set 👌 Perfect for parties, events, or just feeling classy! 💖",
    "url": "https://youtube.com/embed/eCghBxubSTY"
  }
];

export default function GalleryPage() {
  return (
    <>
      {/* Header */}
      <section className="section-padding bg-secondary">
        <div className="section-container text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="heading-xl text-foreground"
          >
            Gallery
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.5 }}
            className="text-body mt-4 max-w-xl mx-auto"
          >
            A showcase of our work — from classic gels to creative nail art.
          </motion.p>
        </div>
      </section>

      {/* Tabs */}
      <section className="section-padding">
        <div className="section-container">
          <Tabs defaultValue="photos" className="w-full">
            <TabsList className="mx-auto mb-8 flex w-fit">
              <TabsTrigger value="photos">📸 Photos</TabsTrigger>
              <TabsTrigger value="videos">🎬 Videos</TabsTrigger>
            </TabsList>

            {/* Photos Tab */}
            <TabsContent value="photos">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {images.map((img, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-30px" }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    className="overflow-hidden rounded-lg group"
                  >
                    <img
                      src={img.src}
                      alt={img.alt}
                      loading="lazy"
                      className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </motion.div>
                ))}
              </div>
              <p className="text-center text-muted-foreground text-sm mt-8">
                More photos coming soon! Follow us for the latest designs.
              </p>
            </TabsContent>

            {/* Videos Tab */}
            <TabsContent value="videos">
              {videos.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {videos.map((video, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1, duration: 0.5 }}
                      className="rounded-lg overflow-hidden border border-border"
                    >
                      <div className="aspect-video">
                        <iframe
                          src={video.url}
                          title={video.title}
                          className="w-full h-full"
                          allowFullScreen
                          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          loading="lazy"
                        />
                      </div>
                      <div className="p-4">
                        <p className="text-sm font-heading font-semibold text-foreground">
                          {video.title}
                        </p>
                        {video.description && (
                          <p className="text-xs text-muted-foreground mt-1">
                            {video.description}
                          </p>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <p className="text-center text-muted-foreground text-sm">
                  More videos coming soon! Follow us for the latest designs.
                </p>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </>
  );
}
