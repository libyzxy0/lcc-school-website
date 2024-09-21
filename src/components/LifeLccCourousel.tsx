import {
  Card,
  CardContent
} from "@/components/ui/card"
import Autoplay from "embla-carousel-autoplay"
import {
  Carousel,
  CarouselContent,
  CarouselItem
} from "@/components/ui/carousel"

const items = [{
  description: "As a student, there is more to life than what happens inside the classroom! Here at La Concepcion College (LCC), we make the most of the opportunities for our students to get involved in campus life, connect with others, and find support to help them succeed.",
  image: "https://laconcepcioncollege.com/wp-content/uploads/2011/04/156633_483063440749_340501180749_5558335_4597836_n1.jpg"
},
  {
    description: "Here at LCC students are involved in leadership positions that serve as an active part of the LCC community and helps in various ways throughout the school year. They also exhibit competitiveness as they compete in academic, cultural, and athletic competitions within and outside the school.",
    image: "https://laconcepcioncollege.com/wp-content/uploads/2010/12/535554_10151453153385750_1300836326_n.jpg"
  },
  {
    description: "There are active student organizations in LCC, under the supervision of the Office of the Student Affairs and the LCC Supreme Student Council, that equips the school year with meaningful activities.",
    image: "https://laconcepcioncollege.com/wp-content/uploads/2013/03/dsc_0378.jpg"
  },
  {
    description: "LCC also taught students to be PROUD and ADAPTABLE. Proud because of its numerous achievements. And adaptable despite the vast circumstances surrounding us in our community and country, they should stay focus and strong as they inculcate among themselves the core values that befits a true LCCian.",
    image: "https://laconcepcioncollege.com/wp-content/uploads/2011/09/319341_10150312911225750_340501180749_7737982_1894499494_n.jpg"
  }]

export function LifeLccCourousel() {
  return (
    <Carousel
      plugins={[
        Autoplay( {
          delay: 3000,
        }),
      ]}
      opts={ {
        align: "start",
      }}
      className="w-full max-w-5xl mx-auto"
      >
      <CarouselContent className="-ml-1">
        {items.map((item, index) => (
          <CarouselItem key={index} className="w-full pl-1 md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card>
                <CardContent className="flex flex-col items-center p-4">
                  <img
                  src={item.image}
                  alt={"Image " + index}
                  width={600}
                  height={400}
                  className="w-full h-48 object-cover rounded-md"
                  />
                <p className="text-sm text-muted-foreground mt-5 text-center">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          </div>
        </CarouselItem>
        ))}
    </CarouselContent>
  </Carousel>
)
}