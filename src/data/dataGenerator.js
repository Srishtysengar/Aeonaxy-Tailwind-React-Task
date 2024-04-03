export function generateDummyData() {
    const dummyData = [];
    for (let i = 1; i <= 180; i++) {
      dummyData.push({
        tag: `Article ${i}`,
        description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown ",
        time: `${Math.floor(Math.random() * 10) + 1} MINUTES`,
        paragraph: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
      });
    }
    return dummyData;
  }