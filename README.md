# CIS 099 Independent Study: An Exploration into Augmented Reality Development Tools

This semester, I underwent an independent study teaching myself AR filter development using state-of-the-art AR development toolkits, specifically using Tiktok and Snap Inc.'s proprietary software. I explored the possibilities of AR development in Effect House (by Tiktok) and Lens Studio (Snap Inc.) to learn more about the AR pipeline and the capabilities of these tools for AR content creation. Over the course of few months I developed 6 AR effects total, 3 within each software.

## Table of Contents

- [Introduction](https://github.com/CIIINDYXUU/ARFilters/blob/main/README.md#introduction)
  - [Objective](https://github.com/CIIINDYXUU/ARFilters/blob/main/README.md#objective)
  - [Timeline](https://github.com/CIIINDYXUU/ARFilters/blob/main/README.md#timeline)
- [Developing in Tiktok's Effect House](https://github.com/CIIINDYXUU/ARFilters/blob/main/README.md#developing-in-tiktoks-effect-house)
  - [Filter #1: Castle Portal Effect](https://github.com/CIIINDYXUU/ARFilters/blob/main/README.md#filter-1-castle-portal-effect)
  - [Filter #2: Ball Bouncer Game](https://github.com/CIIINDYXUU/ARFilters/blob/main/README.md#filter-2-ball-bouncer-game)
  - [Filter #3: Galaxy Face Filter](https://github.com/CIIINDYXUU/ARFilters/blob/main/README.md#filter-3-galaxy-face-effect)
- [Developing in Snap Inc.'s Lens Studio](https://github.com/CIIINDYXUU/ARFilters/blob/main/README.md#developing-in-snap-incs-lens-studio)
  - [Lens #1: Interactive Rain Shader](https://github.com/CIIINDYXUU/ARFilters/blob/main/README.md#lens-1-interactive-rain-shader)
  - [Lens #2: Fish Hand Tracking Effect](https://github.com/CIIINDYXUU/ARFilters/blob/main/README.md#lens-1-interactive-rain-shader)
  - [Lens #3: Volumetric Vortex](https://github.com/CIIINDYXUU/ARFilters/blob/main/README.md#lens-1-interactive-rain-shader)
- [Conclusion](https://github.com/CIIINDYXUU/ARFilters/blob/main/README.md#conclusion)

## Introduction

Since its advent in the late 1960s, augmented reality (AR), an immersive technology that allows users to interact with digital objects projected onto the real world, has reshaped the ways in which we consume and interact with digital content. In recent years, interest in AR technology has surged, captivating audiences across various industries with its ability to blend digital with physical. As technological advancements in AR software and hardware, such as Apple's Vision Pro headset, become more mainstream, there exists an exciting opportunity for engineers, researchers, designers, and developers to build AR-based applications and solutions for the masses. AR provides countless affordances in visualization, interaction, and immersion, and presents unique solutions for an array of different industries, particular regarding entertainment and content creation. 

As augmented reality technology continues to gain traction and become increasingly integrated into our daily lives, there is a growing need for individuals with expertise in AR development and design. Over the past decade, more and more tools for AR development have also become more accessible to the public. Two leading players in the AR content creation industry are Tiktok and Snapchat, both platforms that allow their users to create and share original AR filters and effects. From interactive games to beauty filters to new AI and ML-based features, the possibilites for creation are endless.

### Objective
The objective of this independent study is to delve deeper into augmented reality development, gaining a comprehensive understanding of existing state-of-the-art AR toolkits and the AR development pipeline. The projects developed over the course of the semester will be multidisciplinary, requiring a combined foundation of artistic intuition, computer graphics knowledge, and software development skills. 

The initial plan was to learn three different softwares: Tiktok's Effect House, Meta's Spark AR, and Unity's AR Foundation, buildling 2-3 AR experiences each. However, early on in the semester I quickly realized this plan was overambitious and decided to rescope from breadth to depth. This study explores AR development in Tiktok's Effect House and Snap Inc.'s Lens Studio, with the goal of delving deeper into each software's capabilities. I ended up creating 6 experiences overall, 3 per software. The following list covers the range of AR features and types of effects I was able to explore in the semester:
- Effect House (Tiktok)
  - World AR (projection onto real-world environments)
  - Interactive Gaming
  - Real-time 3D Physics
  - Head Tracking
  - Face Filters
- Lens Studio (Snap Inc.)
  - Interactive Shaders and Post-Processing
  - Volumetric Rendering
  - Hand Tracking
  - VFX

### Timeline

Upon rescoping the project from the initial plan, I restructured my timeline to the following:

![Independent Study (2)](https://github.com/CIIINDYXUU/ARFilters/assets/88256581/d6842852-6917-4cb5-9d6a-c4c73c0df16d)

## Developing in Tiktok's Effect House

All assets (3D models and materials) were taken directly from Effect House's in-house asset and material libraries.

### Filter #1: Castle Portal Effect
The first effect I wanted to try making was a portal effect, one where a user could view the portal suspended midair and travel inside to view another world. 

<div align="center">
  <video src= https://github.com/CIIINDYXUU/ARFilters/assets/88256581/50c38b83-80dd-49b4-a634-d3ca960dac12 />
</div>


This effect relies heavily on Effect House's AR Plane feature, which tracks real-world surfaces and allows for the placement of 3D models in a real environment. Another major component to the filter is occlusion, hiding virtual objects behind real world elements, which is responsible for the portal like effect. The filter comprises mainly of a spherical mesh with a sky material applied to it as well as "The Occluder," another spherical mesh that obscures the outside of the "Sky" object except for the opening of the portal. Within the Sky object are Castle, Rock, and Cloud assets animated on loop. 

### Filter #2: Ball Bouncer Game
Interactive games are one of the most popular filter effects on the TikTok platform, constantly going viral, so I knew that I wanted to attempt making one myself. My goal was to design a straightforward but addictive, interactive game that utilized EFfect House's 3D Physics engine. Over the course of 2-3 weeks, I conceptualized, designed, and developed an endless runner game with a bouncing ball, inspired by the popular mobile game Doodle Jump. 

Ball Bouncer is an endless runner game where the user tries to keep a ball bouncing higher and higher. Instead of platforms already existing for the ball to bounce on top of, the user is responsible for drawing platforms to keep the ball going and must move swiftly to keep the ball from falling. 

<div align="center">
  <video src= https://github.com/CIIINDYXUU/ARFilters/assets/88256581/78e69e60-dff8-4ef0-b2b4-1e3cf6e21521 />
</div>




### Filter #3: Galaxy Face Effect
The final effect I wanted to create in Effect House was a face filter, as AR filters that utilize face tracking to create fun effects are so prevalent and widespread.

<div align="center">
  <video src= https://github.com/CIIINDYXUU/ARFilters/assets/88256581/4ce99c68-691a-4a9c-bde6-3b782dd6665b />
</div>

## Developing in Snap Inc.'s Lens Studio

Compared to Effect House, which released in 2022, Lens Studio has been out since 2017 and as a result felt more robust and developed, especially regarding its graphics capabilities. Unlike Effect House which prioritizes no-code visual scripting, Lens Studio also had more features for  In the second half of the study, I wanted to continue exploring different types of AR effects other than games, head tracking, and world effects. Lens Studio also 

### Lens #1: Interactive Rain Shader
One 

<div align="center">
  <video src= />
</div>


### Lens #2: Fish Hand Tracking Effect



### Lens #3: Volumetric Vortex

<div align="center">
  <video src= https://github.com/CIIINDYXUU/ARFilters/assets/88256581/c75c7daa-471b-41f7-9b26-1fbd14115fae />
</div>


## Conclusion
