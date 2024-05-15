# CIS 099 Independent Study: An Exploration into Augmented Reality Development Tools

This semester, I underwent an independent study teaching myself AR filter development using state-of-the-art AR development toolkits, specifically using Tiktok and Snap Inc.'s proprietary software. I explored the possibilities of AR development in Effect House (by Tiktok) and Lens Studio (Snap Inc.) to learn more about the AR pipeline and the capabilities of these tools for AR content creation. 

**Over the course of few months I developed 6 AR effects total, 3 within each software.**

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

The initial plan was to learn three different softwares: Tiktok's Effect House, Meta's Spark AR, and Unity's AR Foundation, buildling 2 AR experiences each and 6 total. However, early on in the semester I quickly realized taeching myself 3 new softwares was overambitious and decided to rescope from breadth to depth. I decided to pivot and focus on 2 toolkits: [Tiktok's Effect House](https://effecthouse.tiktok.com/) and [Snap Inc.'s Lens Studio](https://ar.snap.com/lens-studio), with the goal of delving deeper into each software's capabilities. I ended up creating 6 experiences overall, 3 per software. The following list covers the range of AR features and types of effects I was able to explore in the semester:

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
</details>

## Developing in Tiktok's Effect House

Effect House has a wide array of features for AR development and so I wanted to explore a wide range of AR effects. Each filter, from conceptualization to designing to prototyping, took approximately 2 - 3 weeks. Over the course of these weeks, I gained more experience using Effect House's node-based visual scripting system, All assets (3D models and materials) were taken directly from Effect House's in-house asset and material libraries, that provide models from [Sketchfab](https://sketchfab.com/). 

### Filter #1: Castle Portal Effect
The first effect I wanted to try making was a portal effect, one where a user could view the portal suspended midair and travel inside to view another world. 

<div align="center">
  <video src= https://github.com/CIIINDYXUU/ARFilters/assets/88256581/50c38b83-80dd-49b4-a634-d3ca960dac12 />
</div>

#### Method
This effect relies heavily on Effect House's AR Plane feature, which tracks real-world surfaces and allows for the placement of 3D models in a real environment. Another major component to the filter is occlusion, which are used to mask virtual objects in the scene and hide portions of rendered geometry. The filter comprises mainly of a spherical mesh with a sky material applied to it as well as "The Occluder," another spherical mesh that obscures the outside of the "Sky" object except for the opening of the portal. Within the Sky object are Castle, Rock, and Cloud assets animated on loop. 

### Filter #2: Ball Bouncer Game
Interactive games are one of the most popular filter effects on the TikTok platform and constantly going viral, so I knew that I wanted to attempt making one myself. My goal was to design a straightforward but addictive, interactive game that utilized Effect House's 3D Physics engine. 

Ball Bouncer is an endless runner game where the user tries to keep a ball bouncing for as long as possible, inspired by the popular mobile game Doodle Jump. Instead of platforms already existing for the ball to bounce on top of, the user is responsible for drawing platforms to keep the ball going and must move swiftly to keep the ball from falling. Powerups that launch the ball far up randomly appear as well.

<div align="center">
  <video src= https://github.com/CIIINDYXUU/ARFilters/assets/88256581/78e69e60-dff8-4ef0-b2b4-1e3cf6e21521 />
</div>

#### Method


### Filter #3: Galaxy Face Effect
The final effect I wanted to create in Effect House was a face filter, as AR filters that utilize face tracking to create fun effects are so prevalent and widespread.

<div align="center">
  <video src= https://github.com/CIIINDYXUU/ARFilters/assets/88256581/4ce99c68-691a-4a9c-bde6-3b782dd6665b />
</div>

#### Method


## Developing in Snap Inc.'s Lens Studio

Compared to Effect House, which released in 2022, Lens Studio has been out since 2017 and as a result felt more robust and developed, especially regarding its graphics capabilities. Unlike Effect House which prioritizes no-code visual scripting, Lens Studio also had more features for custom code and scripts to build out their filters (which are called Lenses in Snapchat). In the second half of the study, I wanted to continue exploring different types of AR effects, specifically post-processing filters, hand tracking, and playing around with the graphics features to make some cool-looking animations. Similarly, each lens took approx. 3 weeks to build and I used assets from either Sketchfab or within Lens Studio.

### Lens #1: Interactive Rain Shader
Upon discovering [this documentation on converting Shadertoy operations to Lens Studio](https://docs.snap.com/lens-studio/references/guides/lens-features/graphics/materials/material-editor/tutorials/shadertoy-to-lens-studio#idate), I was inspired to create a Lens that used GLSL shaders to create an interesting interactive effect. I settled on a rain shader effect, where the user can drag their finger on the screen to temporarily "wipe away" the falling rain.

<div align="center">
  <video src= />
</div>

#### Method
<img align="right" src=https://github.com/CIIINDYXUU/ARFilters/assets/88256581/97287d31-b258-4360-a9f8-b921425f0d5d width=500 height=auto>

The main approach for this filter was using Lens Studio's unique "Custom Code" node which allows for writing custom shaders. Specifically, I found a [Youtube tutorial](https://www.youtube.com/watch?app=desktop&v=1CdKj_kqieY) that outlined how to use [this website](https://codepen.io/2020cv/full/YzaEBgy) to directly convert Shadertoy shaders in GLSL to be compatible within Lens Studio, which uses Javascript. Then, I scoured the Shadertoy website looking for some interesting rain shaders and decided to go with [this shader with falling rain on glass](https://www.shadertoy.com/view/ltffzl). Following the tutorial, I converted the GLSL code and begun implementing the shader within Lens Studio. 

At a high-level, the implementation behind the filter involves two main parts: a Rain shader material which is applied to the screen as well as a "Brush Controller" that wipes the rain drops clear via masking before fading back to the shader. To implement the "Brush" I implemented a script using [documentation on ScreenTransform](https://docs.snap.com/api/lens-studio/Classes/Components#ScreenTransform), which is a type of class that affects object behavior, in this case allowing a user to draw on screen. A user drawing on the screen is an Overlay effect/material directly affecting the opacity (alpha channel) of the background.


### Lens #2: Fish Hand Tracking Effect
Since I explored facial/head tracking on Effect House, I wanted to also explore hand tracking which allows for some interesting AR interactive effects. After looking into Snap AR's [documentation on hand tracking](https://docs.snap.com/lens-studio/references/templates/object/hand), I came across an interesting idea combining hand tracking and crowd simulation/VFX. In this filter, users can hold up their hands to control swarms of fish! By holding up their right hand, the fish are attracted to the position of your hand. By holding up your left hand, the fish are repelled away.

#### Method

### Lens #3: Volumetric Vortex

<div align="center">
  <video src= https://github.com/CIIINDYXUU/ARFilters/assets/88256581/c75c7daa-471b-41f7-9b26-1fbd14115fae />
</div>

#### Method

## Conclusion


